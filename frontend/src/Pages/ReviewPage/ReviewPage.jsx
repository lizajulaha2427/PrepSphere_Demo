import React, { useState, useEffect } from 'react';
import { Star, User, Calendar, ThumbsUp, Filter, Send, BookOpen, ArrowUpDown, SortAsc } from 'lucide-react';
import './ReviewPage.css';

// Mock data for demonstration
const mockReviews = [
  {
    _id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    rating: 5,
    title: 'Excellent Course Quality',
    review: 'The Frontend Development course was incredibly comprehensive. The instructors were knowledgeable and the hands-on projects really helped me understand the concepts. Highly recommend!',
    course: 'Frontend Development',
    createdAt: '2024-11-15T10:30:00Z',
    helpful: 12
  },
  {
    _id: '2',
    name: 'Mike Chen',
    email: 'mike@example.com',
    rating: 5,
    title: 'Life-changing Experience',
    review: 'Data Structures & Algorithms course completely changed how I approach problem-solving. The explanations are clear and the practice problems are challenging but rewarding.',
    course: 'Data Structures & Algorithms',
    createdAt: '2024-11-12T14:20:00Z',
    helpful: 8
  },
  {
    _id: '3',
    name: 'Emily Rodriguez',
    email: 'emily@example.com',
    rating: 4,
    title: 'Great Learning Platform',
    review: 'The System Design course provided excellent insights into scalable architecture. The case studies were particularly helpful for understanding real-world applications.',
    course: 'System Design',
    createdAt: '2024-11-10T09:15:00Z',
    helpful: 15
  },
  {
    _id: '4',
    name: 'David Kim',
    email: 'david@example.com',
    rating: 5,
    title: 'Perfect for Interview Prep',
    review: 'JavaScript course was exactly what I needed for my tech interviews. The coding challenges and explanations helped me land my dream job!',
    course: 'JavaScript',
    createdAt: '2024-11-08T16:45:00Z',
    helpful: 20
  },
  {
    _id: '5',
    name: 'Lisa Thompson',
    email: 'lisa@example.com',
    rating: 5,
    title: 'Outstanding React Course',
    review: 'The React course covered everything from basics to advanced concepts. The project-based learning approach made complex topics easy to grasp.',
    course: 'React',
    createdAt: '2024-11-05T11:30:00Z',
    helpful: 18
  },
  {
    _id: '6',
    name: 'Alex Martinez',
    email: 'alex@example.com',
    rating: 4,
    title: 'Solid Backend Foundation',
    review: 'Backend Development course gave me a strong foundation in server-side programming. The Node.js and database sections were particularly well-structured.',
    course: 'Backend Development',
    createdAt: '2024-11-03T13:20:00Z',
    helpful: 9
  }
];

const mockStats = {
  averageRating: 4.8,
  totalReviews: 6
};

const ReviewPage = () => {
  const baseURL = 'http://localhost:4000/api';

  // State management
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState(mockStats);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [updatingHelpful, setUpdatingHelpful] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    rating: 0,
    title: '',
    review: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [filters, setFilters] = useState({
    rating: 'All',
    course: 'All',
    sortBy: 'Date',
    sortOrder: 'Newest'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;

  // API functions
  const fetchReviews = async () => {
    try {
      const response = await fetch(`${baseURL}/reviews`);
      if (!response.ok) throw new Error('Failed to fetch reviews');
      const data = await response.json();
      setReviews(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch(`${baseURL}/reviews/stats`);
      if (!response.ok) throw new Error('Failed to fetch stats');
      const data = await response.json();
      setStats(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError('');
      try {
        await Promise.all([fetchReviews(), fetchStats()]);
      } catch (err) {
        // If API fails, use mock data
        setReviews(mockReviews);
        setStats(mockStats);
      }
      setLoading(false);
    };
    loadData();
  }, []);

  // Form handling
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
    if (formErrors.rating) {
      setFormErrors(prev => ({ ...prev, rating: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.course) errors.course = 'Course selection is required';
    if (formData.rating === 0) errors.rating = 'Rating is required';
    if (!formData.title.trim()) errors.title = 'Title is required';
    if (!formData.review.trim()) errors.review = 'Review is required';
    return errors;
  };

  const submitReview = async (formData) => {
    try {
      const response = await fetch(`${baseURL}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to submit review');
      }
      return await response.json();
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmitting(true);
      setError('');
      try {
        await submitReview(formData);
        setShowModal(false);
        setFormData({ name: '', email: '', course: '', rating: 0, title: '', review: '' });
        // Refresh reviews and stats
        await Promise.all([fetchReviews(), fetchStats()]);
      } catch (err) {
        setError(err.message);
      } finally {
        setSubmitting(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const handleHelpful = async (reviewId) => {
    setUpdatingHelpful(reviewId);
    setError('');
    try {
      const response = await fetch(`${baseURL}/reviews/${reviewId}/helpful`, {
        method: 'PATCH',
      });
      if (!response.ok) throw new Error('Failed to update helpful count');
      const data = await response.json();
      // Update local state
      setReviews(prev => prev.map(review =>
        review._id === reviewId ? { ...review, helpful: data.helpful } : review
      ));
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdatingHelpful(null);
    }
  };

  // Filter and sort reviews
  const filteredAndSortedReviews = () => {
    let filtered = reviews;

    if (filters.rating !== 'All') {
      filtered = filtered.filter(review => review.rating === parseInt(filters.rating));
    }

    if (filters.course !== 'All') {
      filtered = filtered.filter(review => review.course === filters.course);
    }

    filtered.sort((a, b) => {
      let comparison = 0;
      switch (filters.sortBy) {
        case 'Date':
          comparison = new Date(b.createdAt) - new Date(a.createdAt);
          break;
        case 'Rating':
          comparison = b.rating - a.rating;
          break;
        case 'Helpful':
          comparison = b.helpful - a.helpful;
          break;
        default:
          break;
      }
      return filters.sortOrder === 'Newest' ? comparison : -comparison;
    });

    return filtered;
  };

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedReviews().length / reviewsPerPage);
  const paginatedReviews = filteredAndSortedReviews().slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Star rating component
  const StarRating = ({ rating, interactive = false, onChange }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`star ${star <= rating ? 'filled' : ''} ${interactive ? 'interactive' : ''}`}
            onClick={interactive ? () => onChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="review-page">
      {/* Header Section */}
      <div className="review-header">
        <h1 className="review-title">
          Student <span className="highlight">Reviews</span>
        </h1>
        <p className="review-subtitle">See what our students say about PrepSphere</p>

        <div className="stats-container">
          <div className="stat-item">
            <div className="flex items-center justify-center mb-1">
              <StarRating rating={Math.round(stats.averageRating)} />
              <span className="ml-2 text-2xl font-bold text-white">{stats.averageRating}</span>
            </div>
            <p className="text-white opacity-90">Average Rating</p>
          </div>
          <div className="stat-item">
            <p className="text-2xl font-bold text-white">{stats.totalReviews}</p>
            <p className="text-white opacity-90">Total Reviews</p>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="write-review-btn"
        >
          Write a Review
        </button>
      </div>

      {/* Review Submission Modal */}
      {showModal && (
        <div className="modall-overlay" onClick={() => setShowModal(false)}>
          <div className="modall-content" onClick={(e) => e.stopPropagation()}>
            <div className="modall-header">
              <h2 className="modall-title">Write Your Review</h2>
              <button
                onClick={() => setShowModal(false)}
                className="modall-close"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-grid">
                <div>
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="form-input"
                  />
                  {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="form-input"
                  />
                  {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                </div>
              </div>

              <div className="form-full">
                <label className="form-label">Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleFormChange}
                  className="form-select"
                >
                  <option value="">Select a course</option>
                  <option value="Frontend Development">Frontend Development</option>
                  <option value="Backend Development">Backend Development</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
                  <option value="System Design">System Design</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React">React</option>
                  <option value="Node.js">Node.js</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                </select>
                {formErrors.course && <p className="error-message">{formErrors.course}</p>}
              </div>

              <div className="form-full">
                <label className="form-label">Rating</label>
                <StarRating rating={formData.rating} interactive onChange={handleRatingChange} />
                {formErrors.rating && <p className="error-message">{formErrors.rating}</p>}
              </div>

              <div className="form-full">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="form-input"
                />
                {formErrors.title && <p className="error-message">{formErrors.title}</p>}
              </div>

              <div className="form-full">
                <label className="form-label">Review</label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleFormChange}
                  rows="4"
                  className="form-textarea"
                ></textarea>
                {formErrors.review && <p className="error-message">{formErrors.review}</p>}
              </div>

              <div className="form-buttons">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-submit"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn-cancel"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-header">
          <Filter className="filter-icon" />
          <h3 className="filter-title">Filter & Sort Reviews</h3>
        </div>
        <div className="filter-container">
          <div className="filter-group">
            <label className="filter-label">
              <Star className="filter-label-icon" />
              Filter by Rating
            </label>
            <select
              value={filters.rating}
              onChange={(e) => setFilters(prev => ({ ...prev, rating: e.target.value }))}
              className="filter-select"
            >
              <option value="All">All Ratings</option>
              <option value="5">⭐ 5 Stars</option>
              <option value="4">⭐ 4 Stars</option>
              <option value="3">⭐ 3 Stars</option>
              <option value="2">⭐ 2 Stars</option>
              <option value="1">⭐ 1 Star</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">
              <BookOpen className="filter-label-icon" />
              Filter by Course
            </label>
            <select
              value={filters.course}
              onChange={(e) => setFilters(prev => ({ ...prev, course: e.target.value }))}
              className="filter-select"
            >
              <option value="All">All Courses</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
              <option value="System Design">System Design</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">
              <ArrowUpDown className="filter-label-icon" />
              Sort By
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
              className="filter-select"
            >
              <option value="Date">📅 Date</option>
              <option value="Rating">⭐ Rating</option>
              <option value="Helpful">👍 Helpful</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">
              <SortAsc className="filter-label-icon" />
              Sort Order
            </label>
            <select
              value={filters.sortOrder}
              onChange={(e) => setFilters(prev => ({ ...prev, sortOrder: e.target.value }))}
              className="filter-select"
            >
              <option value="Newest">⬆️ Newest First</option>
              <option value="Oldest">⬇️ Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <p className="text-gray-600">Loading reviews...</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {/* Reviews Grid */}
      {!loading && paginatedReviews.length > 0 && (
        <div className="reviews-grid">
          {paginatedReviews.map((review) => (
            <div key={review._id} className="review-card">
              <div className="review-header-card">
                <div className="avatar">
                  <User className="avatar-icon" />
                </div>
                <div className="reviewer-info">
                  <span className="review-name">{review.name}</span>
                  <div className="review-stars">
                    <StarRating rating={review.rating} />
                  </div>
                  <div className="review-date">
                    <Calendar className="date-icon" />
                    {new Date(review.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>

              <h4 className="review-title-card">{review.title}</h4>
              <p className="review-text">{review.review}</p>

              <div className="review-footer">
                <span className="course-badge">
                  {review.course}
                </span>
                <button
                  onClick={() => handleHelpful(review._id)}
                  disabled={updatingHelpful === review._id}
                  className="helpful-btn"
                >
                  <ThumbsUp className="helpful-icon" />
                  Helpful ({review.helpful})
                  {updatingHelpful === review._id && <span className="ml-2">...</span>}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && paginatedReviews.length === 0 && (
        <div className="empty-state">
          <h3>No Reviews Yet</h3>
          <p>Be the first to share your experience with PrepSphere!</p>
          <button
            onClick={() => setShowModal(true)}
            className="write-review-btn"
          >
            Write the First Review
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-orange-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-2 rounded ${
                currentPage === page
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-50'
              } transition-colors`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-orange-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
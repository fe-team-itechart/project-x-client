import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StarRatings from 'react-star-ratings';
import { withTranslation } from 'react-i18next';

import { getCourseDetails, subscribeCourse, subscribeCourseCheck } from '../../services/course';
import { Spinner } from '../../components/spinner';

import styles from './styles.module.scss';


class coursePageDetails extends Component {
  state = {
    course: {},
    error: null,
    showReviewsNum: 1,
    isLoading: true,
    subscribed: false,
  };

  async componentDidMount() {
    const courseId = this.props.match.params.id;
    const response = await getCourseDetails(courseId);
    const subscribed = await subscribeCourseCheck(courseId);
    
    if (subscribed && subscribed.id) {
      this.setState({
        subscribed: true
      })
    }

    if (response.error) {
      this.setState({ error: response.data, isLoading: false })
    } else {
      this.setState({ course: response.data, isLoading: false });
    }
  }

  subscribeUserCourse = async () => {
    const courseId = this.props.match.params.id;
    this.setState({
      isLoading: true
    });
    const response = await subscribeCourse(courseId);
    if (response && response.id) {
      this.setState({
        subscribed: true,
        isLoading: false
      })
    }
  }

  showMoreReviews = () => {
    const { course, showReviewsNum } = this.state;

    if (course.courseReviews.length > showReviewsNum)
      this.setState({ showReviewsNum: showReviewsNum + 2 });
  };

  render() {
    const {
      courseName,
      description,
      rating,
      numberOfEnrolledStudents,
      authors,
      language,
      profits,
      courseReviews,
    } = this.state.course;

    const { isLoading, showReviewsNum, error, subscribed } = this.state;

    const { isAuthenticated } = this.props;
    const { t: translate } = this.props;

    return (
      <main className={styles.coursePageDetailsWrapper}>
        {isLoading && (
          <Spinner />
        )}
        {error ? (
          <div className={styles.error}>{error.message}</div>
        ) : (
            <div>
              <header className={styles.headerWrapper}>
                <div className={styles.headerDescription}>
                  <h2 className={styles.courseTitle}>{courseName}</h2>
                  <p className={styles.shortDescription}>{description}</p>
                  <div className={styles.courseStats}>
                    <div className={styles.stars}>
                      <StarRatings
                        rating={rating}
                        starRatedColor="#ff8c05"
                        starEmptyColor="#515151"
                        starDimension="24px"
                        starSpacing="3px"
                        numberOfStars={5}
                        name="courseRating"
                      />
                    </div>
                    <span>{rating}</span>
                    <span className={styles.verticalLine} />
                    <span>
                      <font>{translate('Students')}: </font> {numberOfEnrolledStudents}
                    </span>
                  </div>
                  <div>
                    <span>
                      <font>{translate('Author')}: </font>
                      {authors}
                    </span>
                    <span className={styles.verticalLine} />
                    <span>
                    <font>{translate('Language')}: </font>
                      {language}
                    </span>
                  </div>
                </div>
                {
                  isAuthenticated && !subscribed &&
                  (<div className={styles.subscribeButtonWrapper}>
                    <button className={styles.subscribeButton} type='button' onClick={this.subscribeUserCourse}>{translate('Subscribe')}</button>
                  </div>)
                }
                {
                  isAuthenticated && subscribed && (
                    <div className={styles.subscribeButtonWrapper}>
                      <span className={styles.subscribeNotification}>{translate('You have already subscribed')}</span>
                    </div>
                  )
                }
              </header>

              <hr />
              <p className={styles.profitTitle}>{translate('Your profits')}</p>
              <ul className={styles.profitList}>
                {profits && profits.map(profit => (
                  <li key={profit.id}>{profit.description}</li>
                ))}
              </ul>
              <hr />
              <p className={styles.reviewsTitle}>{translate('Reviews')}</p>
              {courseReviews && courseReviews.slice(0, showReviewsNum).map((review, key) => (
                <div className={styles.reviewWrapper} key={key}>
                  <div>
                    <span>Jhon Doe(Default)</span>
                    <div className={styles.stars}>
                      <StarRatings
                        rating={review.rating}
                        starRatedColor="#ff8c05"
                        starEmptyColor="#515151"
                        starDimension="24px"
                        starSpacing="3px"
                        numberOfStars={5}
                        name={`review${review.key}`}
                      />
                    </div>
                    <span>{review.createdAt}</span>
                  </div>
                  <p>{el.text}</p>
                </div>
              ))}
              {courseReviews && courseReviews.length > showReviewsNum && (
                <div className={styles.buttonWrapper}>
                  <button
                    className={styles.showMoreButton}
                    type="button"
                    onClick={this.showMoreReviews}>
                     {translate('Show more reviews')}
                </button>
                </div>
              )}
            </div>
          )}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated
});

export default withRouter(connect(mapStateToProps, null)(withTranslation('translations')(coursePageDetails)));

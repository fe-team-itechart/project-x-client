import React, { Component } from 'react';

import StarRatings from 'react-star-ratings';
import { withTranslation } from 'react-i18next';

import { getCourseDetails } from '../../services/course';
import { Spinner } from '../../components/spinner';

import styles from './styles.module.scss';

class coursePageDetails extends Component {
  state = {
    course: {},
    error: null,
    showReviewsNum: 1,
    isLoading: true,
  };

  async componentDidMount() {
    const courseId = this.props.match.params.id;
    const response = await getCourseDetails(courseId);
    response.error
      ? this.setState({ error: response.data, isLoading: false })
      : this.setState({ course: response.data, isLoading: false });
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
    const { isLoading, showReviewsNum, error } = this.state;
   
    return (
      <main className={styles.coursePageDetailsWrapper}>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <div className={styles.error}>{error.message}</div>
        ) : (
          <div>
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
              <span className={styles.verticalLine}></span>
              <span>
                <font>{this.props.t('Students')}: </font>
                {numberOfEnrolledStudents}
              </span>
            </div>
            <div>
              <span>
                <font>{this.props.t('Author')}: </font>
                {authors}
              </span>
              <span className={styles.verticalLine}></span>
              <span>
                <font>{this.props.t('Language')}: </font>
                {language}
              </span>
            </div>
            <hr />
            <p className={styles.profitTitle}>{this.props.t('Your profits')}</p>
            <ul className={styles.profitList}>
              {profits.map(el => (
                <li key={el.id}>{el.description}</li>
              ))}
            </ul>
            <hr />
            <p className={styles.reviewsTitle}>{this.props.t('Reviews')}</p>
            {courseReviews.slice(0, showReviewsNum).map((el, key) => (
              <div className={styles.reviewWrapper} key={key}>
                <div>
                  <span>Jhon Doe(Default)</span>
                  <div className={styles.stars}>
                    <StarRatings
                      rating={el.rating}
                      starRatedColor="#ff8c05"
                      starEmptyColor="#515151"
                      starDimension="24px"
                      starSpacing="3px"
                      numberOfStars={5}
                      name={`review${el.key}`}
                    />
                  </div>
                  <span>{el.createdAt}</span>
                </div>
                <p>{el.text}</p>
              </div>
            ))}
            {courseReviews.length > showReviewsNum && (
              <div className={styles.buttonWrapper}>
                <button
                  className={styles.showMoreButton}
                  type="button"
                  onClick={this.showMoreReviews}>
                  {this.props.t('Show more reviews')}
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    );
  }
}

export default withTranslation('translations')(coursePageDetails);

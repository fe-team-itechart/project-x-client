import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import StarRatings from 'react-star-ratings';

import styles from './styles.module.scss';

class coursePageDetails extends Component {
  state = {
    title: 'Course title',
    shortDescription:
      'short description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, maiores eum illo veniam explicabo atque odit dignissimos. Voluptate nostrum nisi quia atque aliquam tempore voluptatibus earum esse nobis quibusdam, voluptatem deleniti fuga quaerat asperiores sequi eius, expedita blanditiis commodi necessitatibus. Dolorem alias, nihil itaque incidunt porro aut voluptate fugiat adipisci.',
    rating: 4.6,
    enrolledStudents: 34,
    author: 'Jhoe Doe',
    language: 'ENG',
    profit: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      'Lorem, ipsum.',
    ],
    showReviewsNum: null,
    reviews: [
      {
        author: 'Kasdasd Adasf',
        rating: 4,
        data: '3 days ago',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid magni possimus dolore alias ea facere voluptate sapiente dignissimos illo non cupiditate nemo quidem, autem consequatur eaque unde repellendus. Totam tempora nobis ducimus temporibus expedita quisquam reiciendis quidem porro a, esse eligendi veritatis, deserunt reprehenderit. Veniam officiis vel harum debitis?',
      },
      {
        author: 'Kasdasd Adasf',
        rating: 5,
        data: '3 days ago',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, cupiditate.',
      },
      {
        author: 'Kasdasd Adasf',
        rating: 3.5,
        data: '3 days ago',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi rerum dolorem itaque quibusdam, soluta eveniet accusantium ea maxime labore, earum provident quos fugit neque sed exercitationem, porro deserunt rem.',
      },
      {
        author: 'Kasdasd Adasf',
        rating: 5,
        data: '3 days ago',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, cupiditate.',
      },
    ],
  };

  async componentDidMount() {
    const courseId = this.props.match.params.id;
    if (this.state.reviews.length) this.setState({ showReviewsNum: 1 });

    // try {
    //   const currentCourse = await axios.get('/api/course/preview', {
    //     id: courseId,
    //   });
    //   if (currentCourse) this.setState({
    //     title: currentCourse.title
    //     ...
    //   });

    // } catch (error) {
    //   console.log(error);
    // }
  }

  showMoreReviews() {
    const { reviews, showReviewsNum } = this.state;
    if (reviews.length > showReviewsNum) {
      this.setState({ showReviewsNum: showReviewsNum + 2 });
    }
  }

  render() {
    const {
      title,
      shortDescription,
      rating,
      enrolledStudents,
      author,
      language,
      profit,
      reviews,
      showReviewsNum,
    } = this.state;

    return (
      <main className={styles.coursePageDetailsWrapper}>
        <div>
          <h2 className={styles.courseTitle}>{title}</h2>
          <p className={styles.shortDescription}>{shortDescription}</p>
          <div className={styles.courseStats}>
            <div className={styles.stars}>
              <StarRatings
                rating={rating}
                starRatedColor="#ff8c05"
                starEmptyColor="#515151"
                starDimension="24px"
                numberOfStars={5}
                name="rating"
              />
            </div>
            <span>{rating}</span>
            <span className={styles.verticalLine}></span>
            <span>
              <font>Students:</font> {enrolledStudents}
            </span>
          </div>
          <div>
            <span>
              <font>Author: </font>
              {author}
            </span>
            <span className={styles.verticalLine}></span>
            <span>
              <font>Language: </font>
              {language}
            </span>
          </div>
          <hr />
          <p className={styles.profitTitle}>Your profit</p>
          <ul className={styles.profitList}>
            {profit.map((el, key) => (
              <li key={key}>{el}</li>
            ))}
          </ul>
          <hr />
          <p className={styles.reviewsTitle}>Reviews</p>
          {reviews.slice(0, showReviewsNum).map((el, key) => (
            <div className={styles.reviewWrapper} key={key}>
              <div>
                <span>{el.author}</span>
                <div className={styles.stars}>
                  <StarRatings
                    rating={el.rating}
                    starRatedColor="#ff8c05"
                    starEmptyColor="#515151"
                    starDimension="24px"
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
                <span>{el.data}</span>
              </div>
              <p>{el.text}</p>
            </div>
          ))}
          {reviews.length > showReviewsNum && (
            <div className={styles.buttonWrapper}>
              <button
                className={styles.showMoreButton}
                type="button"
                onClick={() => this.showMoreReviews()}>
                Show more reviews
              </button>
            </div>
          )}
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(coursePageDetails);

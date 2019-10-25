import React, { Component } from 'react';

import queryString from 'query-string';
import { withTranslation } from 'react-i18next';

import { Spinner } from '../../components/spinner';
import CourseCard from '../../components/courseCard';
import { getCoursesByAttribute } from '../../services/courses';

import styles from './styles.module.scss';

class Catalogue extends Component {
  state = {
    courses: [],
    isLoading: true,
    searchValue: '',
  };

  componentDidMount = async () => {
    const { location } = this.props;
    const query = queryString.parse(location.search);

    const courses = await getCoursesByAttribute(query.search, query.limit);

    this.setState({ courses, isLoading: false, searchValue: query.search });
  };

  componentDidUpdate = async prevProps => {
    const { location } = this.props;
    const query = queryString.parse(location.search);

    if (location.search !== prevProps.location.search) {
      this.setState({ isLoading: true });
      const courses = await getCoursesByAttribute(query.search, query.limit);
      this.setState({ courses, isLoading: false, searchValue: query.search });
    }
  };

  render() {
    const { t: translate } = this.props;

    return (
      <main className={styles.mainPageWrapper}>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className={styles.searchValueWrapper}>
              <h3>/{this.state.searchValue}/</h3>
            </div>
            <section className={styles.coursesWrapper}>
              {this.state.courses.length !== 0 ? (
                this.state.courses.map((course, index) => (
                  <CourseCard
                    key={index}
                    title={course.courseName}
                    authors={course.authors}
                    rate={course.rating}
                    id={course.id}
                  />
                ))
              ) : (
                <h2>
                  {translate('There are no courses with')}{' '}
                  {this.state.searchValue} {translate('value')}
                </h2>
              )}
            </section>
          </>
        )}
      </main>
    );
  }
}

export default withTranslation('translations')(Catalogue);

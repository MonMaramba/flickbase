import { useEffect } from 'react';

// MUI
import { Grid, Button } from '@mui/material';

//REDUX
import { useDispatch, useSelector } from 'react-redux';

import { homeLoadMore } from '../../store/actions/articles';

const Home = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.articles.length <= 0) {
      dispatch(homeLoadMore(articles.homeSort));
    }
  }, [dispatch]);

  const getNextArticles = () => {
    let skip = articles.homeSort.skip + articles.homeSort.limit;
    dispatch(homeLoadMore({ ...articles.homeSort, skip: skip }));
  };

  return (
    <>
      <Grid container spacing={2} className='article_card'>
        {articles && articles.articles
          ? articles.articles.map((item) => (
              <Grid key={item._id} item xs={12} sm={6} lg={3}>
                {item.title}
              </Grid>
            ))
          : null}
        <hr />
        <Button variant='outlined' onClick={getNextArticles}>
          Load MORE
        </Button>
      </Grid>
    </>
  );
};

export default Home;

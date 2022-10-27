import { Table, Pagination } from 'react-bootstrap';
import Moment from 'react-moment';

import { Loader } from '../../../utils/tools';

const PaginateComponent = ({ articles }) => {
  return (
    <>
      {articles && articles.docs ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Created</th>
                <th>Title</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {articles.docs.map((item) => (
                <tr key={item._id}>
                  <td>
                    <Moment>{item.date}</Moment>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.score}</td>
                  <td
                    className='action_btn remove_btn'
                    onClick={() => alert('REMOVE')}
                  >
                    Remove
                  </td>
                  <td
                    className='action_btn edit_btn'
                    onClick={() => alert('Go to Edit')}
                  >
                    Edit
                  </td>
                  <td
                    className='action_btn status_btn'
                    onClick={() => alert('Change status')}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            {articles.hasPrevPage ? (
              <>
                <Pagination.Prev />
                <Pagination.Item>{articles.prevPage}</Pagination.Item>
              </>
            ) : null}
            <Pagination.Item active>{articles.page}</Pagination.Item>
          </Pagination>
          {articles.hasNextPage ? (
            <>
              <Pagination.Item>{articles.nextPage}</Pagination.Item>
              <Pagination.Next />
            </>
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PaginateComponent;

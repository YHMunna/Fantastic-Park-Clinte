import React from "react";
import { Link } from "react-router-dom";

const SingleAllOrder = (props) => {
  const { allorder, handleDelete } = props;

  return (
    <tbody>
      <tr>
        <th scope="row text-center">#</th>
        <td>{allorder.name}</td>
        <td>{allorder.price}</td>
        <td>
          <Link to={`/update/${allorder._id}`}>
            {" "}
            <button className="btn btn-info">Update</button>
          </Link>
        </td>

        <td>
          <button
            onClick={() => handleDelete(allorder._id)}
            className="btn btn-warning"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleAllOrder;

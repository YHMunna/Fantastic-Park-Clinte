import React from "react";
import { Link } from "react-router-dom";

const SingleAllOrder = (props) => {
  const { allorder, handleDelete, handleAprove } = props;

  return (
    <tbody>
      <tr>
        <th scope="row text-center">{allorder.name}</th>
        <td>{allorder.price}</td>
        <td>{allorder.status}</td>
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
        <td>
          <button
            onClick={() => handleAprove(allorder._id)}
            className="btn btn-success"
          >
            Aprove
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleAllOrder;

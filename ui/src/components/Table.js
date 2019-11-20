import React from "react";
import "./Table.css";

/**
 * 
 *  'building_name': 'CASA DEL GELATO',
    'flat_number': '10',
    'flat_number_suffix': 'A',
    'number_first': '24',
    'number_last': '26',
    'street_name': 'HIGH STREET',
    'street_type': 'ROAD',
    'locality_name': 'MOUNT WAVERLEY',
    'state': 'VICTORIA',
    'postcode': '3183'
 */

const Table = ({ data }) => {
  return (
    <table className="dataTable">
      <tr>
        <th>Building Name</th>
        <th>Flat Number</th>
        <th>Flat Number Suffix</th>
        <th>Number First</th>
        <th>Number Last</th>
        <th>Building Name</th>
        <th>Street Type</th>
        <th>Locality Name</th>
        <th>State</th>
        <th>Postcode</th>
      </tr>
      <tr>
        <td>{data.building_name}</td>
        <td>{data.flat_number}</td>
        <td>{data.flat_number_suffix}</td>
        <td>{data.number_first}</td>
        <td>{data.number_last}</td>
        <td>{data.street_name}</td>
        <td>{data.street_type}</td>
        <td>{data.locality_name}</td>
        <td>{data.state}</td>
        <td>{data.postcode}</td>
      </tr>
    </table>
  );
};

export default Table;

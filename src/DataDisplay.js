import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import './style.css';
import { formatTimestamp } from './Time.js';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from './logo2.jpeg';


const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = firebase.database().ref('Camera/Data');
      dbRef.on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
          setData(data);
        }
      });
    };

    fetchData();

    return () => firebase.database().ref('Camera/Data').off();
  }, []);

  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.addImage(logo, 'jpeg', 5, 5, 20, 20)
    const tableData = [];
    for (const [key, value] of Object.entries(data)) {
      tableData.push([key, value]);
    }
  
    const headers = [['Vehicle Type', 'Vehicle Count']];
  
    doc.autoTable({
      startY: 35, 
      head: headers, 
      body: tableData
    });
  
    doc.text("Data from Raspberry Pi Device", 70, 20);
    doc.text("Place : Bangalore", 100, doc.autoTable.previous.finalY + 20);
    doc.text("Date : " + formatTimestamp(data['Time']), 100, doc.autoTable.previous.finalY + 30);
  
    doc.save('sayanraspidata.pdf');
  };

  return (
    <>
      <div className="table-container">
        <h1 className="title">Data from Raspberry Pi</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Vehicle Type</th>
              <th>Vehicle Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UpCar</td>
              <td>{data['UpCar']}</td>
            </tr>
            <tr>
              <td>DownCar</td>
              <td>{data['DownCar']}</td>
            </tr>
            <tr>
              <td>UpBus</td>
              <td>{data['UpBus']}</td>
            </tr>
            <tr>
              <td>DownBus</td>
              <td>{data['DownBus']}</td>
            </tr>
            <tr>
              <td>UpTruck</td>
              <td>{data['UpTruck']}</td>
            </tr>
            <tr>
              <td>DownTruck</td>
              <td>{data['DownTruck']}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="timestamp-container" id="timestamp">
        {formatTimestamp(data['Time'])}
      </div>
      <div className="button-container">
  <button className="download-button" onClick={downloadAsPDF}>Download as a PDF</button>
</div>

    </>
  );
};

export default DataDisplay;

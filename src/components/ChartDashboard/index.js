import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {name: '01/10/2019', done: 25, goal: 1.086956522},
    {name: '02/10/2019', done: 25, goal: 2.173913043},
    {name: '03/10/2019', done: 25, goal: 3.260869565},
    {name: '04/10/2019', done: 25, goal: 4.347826087},
    {name: '05/10/2019', done: 25, goal: 5.434782609},
    {name: '06/10/2019', done: 25, goal: 6.52173913},
    {name: '07/10/2019', done: 25, goal: 7.608695652},
    {name: '08/10/2019', done: 25, goal: 8.695652174},
    {name: '09/10/2019', done: 25, goal: 9.782608696},
    {name: '10/10/2019', done: 25, goal: 10.86956522},
    {name: '11/10/2019', done: 25, goal: 11.95652174},
    {name: '12/10/2019', done: 26, goal: 13.04347826},
    {name: '13/10/2019', done: 26, goal: 14.13043478},
    {name: '14/10/2019', done: 26, goal: 15.2173913},
    {name: '15/10/2019', done: 26, goal: 16.30434783},
    {name: '16/10/2019', done: 26, goal: 17.39130435},
    {name: '17/10/2019', done: 27, goal: 18.47826087},
    {name: '18/10/2019', done: 28, goal: 19.56521739},
    {name: '19/10/2019', done: 29, goal: 20.65217391},
    {name: '20/10/2019', done: 30, goal: 21.73913043},
    {name: '21/10/2019', done: 30, goal: 22.82608696},
    {name: '22/10/2019', done: 30, goal: 23.91304348},
    {name: '23/10/2019', done: 30, goal: 25},
    {name: '24/10/2019', done: 30, goal: 26.08695652},
    {name: '25/10/2019', done: 30, goal: 27.17391304},
    {name: '26/10/2019', done: 30, goal: 28.26086957},
    {name: '27/10/2019', done: 30, goal: 29.34782609},
    {name: '28/10/2019', done: 30, goal: 30.43478261},
    {name: '29/10/2019', done: 30, goal: 31.52173913},
    {name: '30/10/2019', done: 30, goal: 32.60869565},
    {name: '31/10/2019', done: 30, goal: 33.69565217},
    {name: '01/11/2019', done: 30, goal: 34.7826087},
    {name: '02/11/2019', done: 30, goal: 35.86956522},
    {name: '03/11/2019', done: 30, goal: 36.95652174},
    {name: '04/11/2019', done: 30, goal: 38.04347826},
    {name: '05/11/2019', done: 31, goal: 39.13043478},
    {name: '06/11/2019', done: 32, goal: 40.2173913},
    {name: '07/11/2019', done: 33, goal: 41.30434783},
    {name: '08/11/2019', done: 33, goal: 42.39130435},
    {name: '09/11/2019', done: 33, goal: 43.47826087},
    {name: '10/11/2019', done: 33, goal: 44.56521739},
    {name: '11/11/2019', done: 33, goal: 45.65217391},
    {name: '12/11/2019', done: 33, goal: 46.73913043},
    {name: '13/11/2019', done: 35, goal: 47.82608696},
    {name: '14/11/2019', done: 36, goal: 48.91304348},
    {name: '15/11/2019', done: 36, goal: 50},
    {name: '16/11/2019', done: 37, goal: 51.08695652},
    {name: '17/11/2019', done: 38, goal: 52.17391304},
    {name: '18/11/2019', done: 39, goal: 53.26086957},
    {name: '19/11/2019', done: 40, goal: 54.34782609},
    {name: '20/11/2019', done: 50, goal: 55.43478261},
    {name: '21/11/2019', done: 60, goal: 56.52173913},
    {name: '22/11/2019', done: 61, goal: 57.60869565},
    {name: '23/11/2019', done: 61, goal: 58.69565217},
    {name: '24/11/2019', done: 62, goal: 59.7826087},
    {name: '25/11/2019', done: 62, goal: 60.86956522},
    {name: '26/11/2019', done: 62, goal: 61.95652174},
    {name: '27/11/2019', done: 62, goal: 63.04347826},
    {name: '28/11/2019', done: 62, goal: 64.13043478},
    {name: '29/11/2019', done: 62, goal: 65.2173913},
    {name: '30/11/2019', done: 62, goal: 66.30434783},
    {name: '01/12/2019', done: 62, goal: 67.39130435},
    {name: '02/12/2019', done: 62, goal: 68.47826087},
    {name: '03/12/2019', done: 62, goal: 69.56521739},
    {name: '04/12/2019', done: 62, goal: 70.65217391},
    {name: '05/12/2019', done: 62, goal: 71.73913043},
    {name: '06/12/2019', done: 65, goal: 72.82608696},
    {name: '07/12/2019', done: 65, goal: 73.91304348},
    {name: '08/12/2019', done: 65, goal: 75},
    {name: '09/12/2019', done: 65, goal: 76.08695652},
    {name: '10/12/2019', done: 65, goal: 77.17391304},
    {name: '11/12/2019', done: 65, goal: 78.26086957},
    {name: '12/12/2019', done: 65, goal: 79.34782609},
    {name: '13/12/2019', done: 70, goal: 80.43478261},
    {name: '14/12/2019', done: 70, goal: 81.52173913},
    {name: '15/12/2019', goal: 82.60869565},
    {name: '16/12/2019', goal: 83.69565217},
    {name: '17/12/2019', goal: 84.7826087},
    {name: '18/12/2019', goal: 85.86956522},
    {name: '19/12/2019', goal: 86.95652174},
    {name: '20/12/2019', goal: 88.04347826},
    {name: '21/12/2019', goal: 89.13043478},
    {name: '22/12/2019', goal: 90.2173913},
    {name: '23/12/2019', goal: 91.30434783},
    {name: '24/12/2019', goal: 92.39130435},
    {name: '25/12/2019', goal: 93.47826087},
    {name: '26/12/2019', goal: 94.56521739},
    {name: '27/12/2019', goal: 95.65217391},
    {name: '28/12/2019', goal: 96.73913043},
    {name: '29/12/2019', goal: 97.82608696},
    {name: '31/12/2019', goal: 98.91304348},
    {name: '31/12/2019', goal: 100},  
];

export default class ChartDashboard extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
        <div style={{ width: '100%', height: 460 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={500}
            data={data}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="done" fill="#0D639D" stroke="#0D639D" />
            <Line type="monotone" dataKey="goal" stroke="#9D2A24" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
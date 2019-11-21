import React from 'react';
import './statistic.css';
import Icone1 from '../../../assets/icon/user-solid.svg';
import Icone2 from '../../../assets/icon/user-check-solid.svg';
import Icone3 from '../../../assets/icon/calendar-alt-regular.svg';
import Icone4 from '../../../assets/icon/user-solid.svg';
import Icone5 from '../../../assets/icon/user-check-solid.svg';
import Icone6 from '../../../assets/icon/calendar-alt-regular.svg';


function Statistic() {
    return(
        <div>
            <div className="cabecalho">
                <h2>
                    Início
                </h2>
            </div>

            <section id="status" className="content">
                <div className="container">
                    <div className="item card">
                        <div className="icon">
                            <img src={Icone1} height="40" alt="Participantes inscritos"/>
                        </div>
                        <div className="text">
                            <h4>223</h4>
                            <p>Participantes inscritos</p>
                        </div>
                    </div>

                    <div className="item card">
                        <div className="icon">
                            <img src={Icone2} height="40" alt="Participantes presentes"/>
                        </div>
                        <div className="text">
                            <h4>105</h4>
                            <p>Participantes presentes</p>
                        </div>
                    </div>

                    <div className="item card">
                        <div className="icon">
                            <img src={Icone3} height="40" alt="Eventos registrados"/>
                        </div>
                        <div className="text">
                            <h4>5</h4>
                            <p>Eventos registrados</p>
                        </div>
                    </div>

                    <div className="item card">
                        <div className="icon">
                            <img src={Icone4} height="40" alt="Participantes inscritos"/>
                        </div>
                        <div className="text">
                            <h4>223</h4>
                            <p>Participantes inscritos</p>
                        </div>
                    </div>

                    <div className="item card">
                        <div className="icon">
                            <img src={Icone5} height="40" alt="Participantes presentes"/>
                        </div>
                        <div className="text">
                            <h4>105</h4>
                            <p>Participantes presentes</p>
                        </div>
                    </div>

                    <div className="item card">
                        <div className="icon">
                            <img src={Icone6} height="40" alt="Eventos registrados"/>
                        </div>
                        <div className="text">
                            <h4>5</h4>
                            <p>Eventos registrados</p>
                        </div>
                    </div>

                    <div className="hr"></div>

                    <div className="chart" id="piechart" style={{width: '50%', height: '300px'}}></div>
                    <div className="chart" id="curve_chart" style={{width: '50%', height: '300px'}}></div>
                </div>

            </section>

            <script type="text/javascript">
                google.charts.load('current', {packages: ['corechart', 'bar']});
                google.charts.setOnLoadCallback(drawPieChart);
                google.charts.setOnLoadCallback(drawLineChart);

                function drawPieChart() {

                var data = google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day'],
                    ['Work',     11],
                    ['Eat',      2],
                    ['Commute',  2],
                    ['Watch TV', 2],
                    ['Sleep',    7]
                ]);

                var options = {
                    title: 'My Daily Activities'
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(data, options);
                }

                function drawLineChart() {
                var data = google.visualization.arrayToDataTable([
                    ['Year', 'Sales', 'Expenses'],
                    ['2004',  1000,      400],
                    ['2005',  1170,      460],
                    ['2006',  660,       1120],
                    ['2007',  1030,      540]
                ]);

                var options = {
                    title: 'Company Performance',
                    curveType: 'function',
                    legend: { position: 'bottom' }
                };

                var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

                chart.draw(data, options);
                }
            </script>
        </div>
    );
}

export default Statistic;
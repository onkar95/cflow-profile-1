import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
const ProfilePercent = ({ filled, height }) => {
    // console.log(filled,"filled")
    const val = filled.address + filled.company + filled.personal
    const [percent, setPercent] = useState(val * 5);
    const [chartOptions, setChartOptions] = useState({
        series: [percent],
        options: {
            chart: {
                height: 270,
                type: "radialBar",
                fontFamily: "Open Sans, Arial, sans-serif",
                foreColor: "#ffb600",
                selection: {
                    enabled: false,
                },
                dropShadow: {
                    enabled: true,
                    blur: 5,
                    color: "#ffb600",
                    opacity: 0.35,
                },
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "65%",
                        background: "transparent",
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: true,
                            fontSize: "16px",
                            fontFamily: "Open Sans, Arial, sans-serif",
                            fontWeight: "bold",
                            colors: "#ffb600",
                            offsetY: 8,
                        },
                    },
                    track: {
                        show: true,
                        background: "#2d2d2d",
                    },
                },
            },
            stroke: {
                lineCap: "round",
            },
            fill: {
                colors: ["#ffb600"],
            },
            labels: [percent + "%"],
            states: {
                hover: {
                    filter: {
                        type: "none",
                    },
                },
                active: {
                    filter: {
                        type: "none",
                    },
                },
            },
        },
    });
    useEffect(() => {
        let temp;
        temp = filled?.personal + filled?.company + filled?.address
        setPercent(temp ? temp * 5 : 0)
        setChartOptions({ ...chartOptions, series: [percent] })
    }, [filled])
    console.log(chartOptions.series);
    return (
        <>
            {window.innerWidth>950?
                <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type='radialBar'
                    height={270}
                />
            :
            <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type='radialBar'
                    height={height}
                />
            }
        </>
    );
};

export default ProfilePercent;

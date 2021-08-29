import React, {  useState } from "react";
import Chart from "react-apexcharts";
const ProfilePercent = ({contri}) => {
    contri = contri?.slice(0,contri.length-1)
    contri = parseInt(contri)
    const [percent, setPercent] = useState(contri);
    const [chartOptions] = useState({
        series: [percent ? percent : 0],
        options: {
            chart: {
                height: 170,
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
    return (
        <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type='radialBar'
            height={170}
        />
    );
};

export default ProfilePercent;

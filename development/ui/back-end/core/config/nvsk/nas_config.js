const dataSourceInfo = {
    studentPerformance: {
        map: {
            pathToFile: 'nas_all-dashboard.json',
            locations: [
                {
                    name: "Location",
                    property: "State",
                    level: "state",
                    isState: true,
                    tooltip: {
                        name: "State/UT name"
                    }
                },
                {
                    name: "Location",
                    property: "District",
                    level: "district",
                    tooltip: {
                        name: "District Name"
                    }
                }
            ],
            dimensions: [
                {
                    name: "Indicator Name",
                    property: "Indicator",
                    tooltip: {
                        name: "Indicator Name",
                        property: "Indicator"
                    }
                },
                {
                    name: "indicator",
                    property: "Performance",
                    weightedAverage: {
                        property: "Performance",
                        against: "Students Surveyed"
                    },
                    tooltip: {
                        name: "Performance",
                        property: "Performance"
                    }
                },
                {
                    name: "state_code",
                    property: "State Code"
                }
            ],
            filters: [
                {
                    name: 'Grade',
                    column: 'Grade',
                    defaultValue: true
                },
                {
                    name: 'Subject',
                    column: 'Subject',
                    defaultValue: true
                },
                {
                    name: 'Indicator Code',
                    column: 'Indicator Code',
                    defaultValue: true
                },
                {
                    name: 'State/UT',
                    column: 'State',
                    optionValueColumn: "State Code"
                }
            ],
            levels: [
                {
                    name: "State",
                    value: "state",
                    property: "State"
                },
                {
                    name: "District",
                    value: "district",
                    property: "District"
                }
            ],
            options: {
                legend: {
                    title: 'NAS Performance'
                },
                tooltip: {
                    reportTypeIndicator: 'percent'
                }
            }
        },
        loTable: {
            pathToFile: 'nas_all-dashboard.json',
            columns: [
                {
                    name: "Indicator Code",
                    property: "Indicator Code",
                    tooltip: {
                        property: "Indicator"
                    }
                },
                {
                    name: "Grade",
                    property: "Grade"
                },
                {
                    name: "Subject",
                    property: "Subject"
                },
                {
                    name: "State",
                    property: "State",
                    transposeColumn: true,
                    isHeatMapRequired: true,
                    color: '#002966',
                    weightedAverage: {
                        property: "Performance",
                        against: "Students Surveyed"
                    },
                    level: "state"
                },
                {
                    name: "District",
                    property: "District",
                    transposeColumn: true,
                    isHeatMapRequired: true,
                    color: '#002966',
                    weightedAverage: {
                        property: "Performance",
                        against: "Students Surveyed"
                    },
                    level: "district"
                }
            ],
            filters: [
                {
                    name: 'Grade',
                    column: 'Grade'
                },
                {
                    name: 'Subject',
                    column: 'Subject'
                },
                {
                    name: 'State/UT',
                    column: 'State',
                    optionValueColumn: "State Code",
                    level: {
                        value: "district",
                        property: "District"
                    }
                }
            ]
        },
        scatterPlot: {
            pathToFile: 'nas_all-dashboard.json',
            series: {
                x: {
                    name: "X-Axis",
                    property: ["Grade", "Subject"],
                    weightedAverage: {
                        property: "Performance",
                        against: "Students Surveyed"
                    }
                },
                y: {
                    name: "Y-Axis",
                    property: ["Grade", "Subject"],
                    weightedAverage: {
                        property: "Performance",
                        against: "Students Surveyed"
                    }
                }
            },
            levels: [
                {
                    name: "State",
                    value: "state",
                    property: "State",
                    tooltip: {
                        name: "State/UT name"
                    }
                },
                {
                    name: "District",
                    value: "district",
                    property: "District",
                    tooltip: {
                        name: "District Name"
                    }
                }
            ],
            filters: [
                {
                    name: 'State/UT',
                    column: 'State',
                    optionValueColumn: "State Code"
                }
            ]
        }
    },
    implementationStatus: {
        map: {
            pathToFile: "nas_program-started.json",
            locations: [
                {
                    name: "Location",
                    property: "State",
                    level: "state",
                    isState: true,
                    tooltip: {
                        name: "State/UT name",
                    },
                },
            ],
            dimensions: [
                {
                    name: "indicator",
                    property: "Started",
                    tooltip: {
                        name: "Implemented NAS",
                    },
                },
                {
                    name: "state_code",
                    property: "State Code",
                },
            ],
            filters: [],
            options: {
                legend: {
                    title: "Implemented NAS",
                },
            },
        },
    }
}

module.exports = dataSourceInfo;

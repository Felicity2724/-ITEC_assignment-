am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv2", am4charts.XYChart);


    // Add data
    chart.data = [{
        "year": "2017",
        "desktop": 6109.7,
        "mobile": 16205.1,
    }, {
        "year": "2018",
        "desktop": 6799.7,
        "mobile": 22335.9,
    }, {
        "year": "2019",
        "desktop": 6813.5,
        "mobile": 29445.0,
    }, {
        "year": "2020",
        "desktop": 6115.3,
        "mobile": 31762.9,
    }, {
        "year": "2021",
        "desktop": 6657.0,
        "mobile": 37474.2,
    }, {
        "year": "2022",
        "desktop": 7061.1,
        "mobile": 40904.0,
    }];

    var title = chart.titles.create();
    title.text = "Ad Spending on Desktop and Mobile(in million USD)"
    title.fontSize = 22;
    title.marginTop = 20;
    title.marginBottom = 20;
    title.marginLeft = 10;
    title.wrap = true;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.location = 0;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.min = 0;

    // Create series
    function createSeries(field, name) {

        // Set up series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.name = name;
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "year";
        series.sequencedInterpolation = true;

        // Make it stacked
        series.stacked = true;

        // Configure columns
        series.columns.template.width = am4core.percent(60);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

        // Add label
        var labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.text = "{valueY}";
        labelBullet.locationY = 0.7;
        labelBullet.label.hideOversized = true;

        return series;
    }

    createSeries("desktop", "Social Media Advertising Desktop");
    createSeries("mobile", "Social Media Advertising Mobile");


    // Legend
    chart.legend = new am4charts.Legend();

});
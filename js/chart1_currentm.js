am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.padding(40, 40, 40, 40);

    var title = chart.titles.create();
    title.text = "Penetration rate of leading social networks in Hong Kong"
    title.fontSize = 22;
    title.marginTop = 20;
    title.marginBottom = 20;
    title.marginLeft = 10;
    title.wrap = true;

    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "network";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "network";
    series.dataFields.valueX = "MAU";
    series.tooltipText = "{valueX.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    var labelBullet = series.bullets.push(new am4charts.LabelBullet())
    labelBullet.label.horizontalCenter = "left";
    labelBullet.label.dx = 10;
    labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
    labelBullet.locationX = 1;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
    });

    categoryAxis.sortBySeries = series;
    chart.data = [{
            "network": "Facebook",
            "MAU": 82
        },
        {
            "network": "Youtube",
            "MAU": 81
        },
        {
            "network": "WhatsApp",
            "MAU": 79
        },
        {
            "network": "Instagram",
            "MAU": 60
        },
        {
            "network": "Wechat",
            "MAU": 54
        },
        {
            "network": "Messager",
            "MAU": 52
        },
        {
            "network": "Line",
            "MAU": 30
        },
        {
            "network": "Twitter",
            "MAU": 30
        },
        {
            "network": "LinkedIn",
            "MAU": 22
        },
        {
            "network": "Skype",
            "MAU": 22
        }
    ]



});
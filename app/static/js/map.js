function drawMap(data,target){
    const svg = d3.select("#map svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");
    
    // Map and projection
    const projection = d3.geoAlbers()

    // Load external data and boot
    
        projection.rotate(-75).fitExtent(
	[
		[0, 0],
		[width, height],
	],
	data
    )
        svg.selectAll('*').remove();
        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(data.features)
            .join("path")
                .attr("fill", function(d){ 
                    
                    if (d.properties["Gebied"]===target) return "#f00";        
                return "#555";
            })
                .attr("class","district")
                .attr("id", function(d){
                return d.id;        
            })
                .attr("d", d3.geoPath()
                .projection(projection)
                )
                .style("stroke", "#fff")
    
    
    }
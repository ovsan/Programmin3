var socket = io.connect('http://localhost:3000');
var table = document.getElementById("statistics");

setInterval(function () {
    socket.emit("get stats", []);
}, 10000);
socket.on("send stats", function (statistics) {
    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>Ժամանակ</td><td>Խոտ</td><td>խոտակեր</td><td>Գիշատիչ</td><td>Կենդանի</td><td>ծնված խոտեր</td><td>կերած խոտեր</td></tr>";
    for (var st of statistics) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + st.timestamp + "</td>";
        tableHTML += "<td>" + st.grasscount + "</td>";
        tableHTML += "<td>" + st.eatcount + "</td>";
        tableHTML += "<td>" + st.gishcount + "</td>";
        tableHTML += "<td>" + st.kendanicount + "</td>";
        tableHTML += "<td>" + st.cnvacxoter + "</td>";
        tableHTML += "<td>" + st.keracxoter + "</td>";

        tableHTML += "</tr>";
    }

    table.innerHTML = tableHTML;
})
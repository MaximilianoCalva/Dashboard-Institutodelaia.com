function doGet(e) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var result = {};
    var allSheets = ss.getSheets();

    var regex = /^(AulaTV|Material)/i;

    allSheets.forEach(function (sheet) {
        var sheetName = sheet.getName();
        if (regex.test(sheetName)) {
            var data = sheet.getDataRange().getValues();
            var items = [];

            for (var i = 1; i < data.length; i++) {
                var row = data[i];

                var numero = row[0];       // Col A: N°
                var titulo = row[1];       // Col B: Título
                var descripcion = row[2];  // Col C: Descripción
                var formato = row[3];      // Col D: Formato
                var link = row[4];         // Col E: Link
                var status = row[5];       // Col F: Status

                // Status flexible: Si está vacío O dice "activo", es válido.
                // Solo ocultamos si dice explícitamente otra cosa (ej. "Inactivo")
                var statusStr = status ? status.toString().trim().toLowerCase() : "";
                var isActive = statusStr === "" || statusStr === "activo";

                if (titulo && titulo.toString().trim() !== "" && link && isActive) {
                    items.push({
                        numero: numero,
                        titulo: titulo,
                        descripcion: descripcion,
                        formato: formato,
                        url: link
                    });
                }
            }
            result[sheetName] = items;
        }
    });

    return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var sheetName = e.parameter.sheet;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet;

  if (sheetName) {
    sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Sheet not found: " + sheetName
      })).setMimeType(ContentService.MimeType.JSON);
    }
  } else {
    sheet = ss.getActiveSheet();
  }

  var data = sheet.getDataRange().getValues();

  // Asumimos que la fila 1 (índice 0) tiene los encabezados
  var headers = data[0];
  var rows = [];

  // Recorremos desde la fila 2 (índice 1) en adelante
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var record = {};

    for (var j = 0; j < headers.length; j++) {
      // Usamos el nombre del encabezado como clave del objeto JSON
      record[headers[j]] = row[j];
    }

    // Filtramos filas vacías si no tienen "No. ALUMNO" o "NOMBRE"
    // Ajusta esta condición según sea necesario
    if (record["NOMBRE"] && record["NOMBRE"] !== "") {
      rows.push(record);
    }
  }

  var result = {
    status: "success",
    data: rows,
    total: rows.length
  };

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// Función auxiliar para probar localmente en el editor de Apps Script
function testData() {
  Logger.log(doGet().getContent());
}

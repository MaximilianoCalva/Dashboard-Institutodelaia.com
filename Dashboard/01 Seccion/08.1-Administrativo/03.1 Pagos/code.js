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
    // Default to the first sheet or specific default if needed
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
    var isEmpty = true;

    for (var j = 0; j < headers.length; j++) {
      // Usamos el nombre del encabezado como clave del objeto JSON
      record[headers[j]] = row[j];
      if (row[j] !== "") {
          isEmpty = false;
      }
    }

    // Filtramos filas totalmente vacías
    if (!isEmpty) {
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
  Logger.log(doGet({parameter: {sheet: 'Woocommerce'}}).getContent());
}

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const vehicle = $('#vehicle').val();
    const year = $('#year').val();
    const model = $('#model').val();
    const mileage = $('#mileage').val();

    // Define your maintenanceData object with the necessary maintenance information
    const maintenanceData = {
      honda: {
        accord: {
          maintenance: 'Maintenance information for Honda Accord...',
          nextService: 'Next service information for Honda Accord...',
        },
        civic: {
          maintenance: 'Maintenance information for Honda Civic...',
          nextService: 'Next service information for Honda Civic...',
        },
      },
      toyota: {
        camry: {
          maintenance: 'Maintenance information for Toyota Camry...',
          nextService: 'Next service information for Toyota Camry...',
        },
        corolla: {
          maintenance: 'Maintenance information for Toyota Corolla...',
          nextService: 'Next service information for Toyota Corolla...',
        },
      },
    };

    const maintenanceInfo = maintenanceData[vehicle][model].maintenance;
    const nextService = maintenanceData[vehicle][model].nextService;

    const alertMessage = `
      Vehicle: ${vehicle}
      Year: ${year}
      Model: ${model}
      Mileage: ${mileage}
      
      Maintenance Information: ${maintenanceInfo}
      Next Service: ${nextService}
    `;

    alert(alertMessage); // Display the alert with the maintenance information
  });
});

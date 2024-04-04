<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Car Maintenance Information</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <i class="fas fa-car"></i> Car Maintenance
          </a>
        </div>
      </nav>
    </header>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="form-group">
            <label for="carBrand">Select Car Brand:</label>
            <select class="form-control" id="carBrand">
              <option value="honda">Honda</option>
              <option value="toyota">Toyota</option>
            </select>
          </div>
          <div class="form-group">
            <label for="carName">Select Car Name:</label>
            <select class="form-control" id="carName"></select>
          </div>
          <div class="form-group">
            <label for="mileage">Enter Mileage:</label>
            <input type="text" class="form-control" id="mileage" />
          </div>
          <button class="btn btn-primary btn-block" id="getMaintenanceInfo">
            Get Maintenance Info
          </button>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="maintenanceModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="maintenanceModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="maintenanceModalLabel">
              Car Maintenance Information
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" id="maintenanceInfo"></div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>

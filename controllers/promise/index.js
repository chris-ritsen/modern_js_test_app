
"use strict";

module.exports = function(request, response, next) {
  response.viewModel = {
    model: {
    }
  };

  next();
};


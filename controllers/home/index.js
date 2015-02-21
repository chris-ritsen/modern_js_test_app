
module.exports = function(request, response, next) {
  response.viewModel = {
    model: {
      title: "Hello!"
    }
  };

  next();
};


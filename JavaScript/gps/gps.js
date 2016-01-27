function GPS () { }

function createNewRoute(route, cost) {
  return { route: route, cost: cost };
}

function explore(route, cost, roads, finish, bestRoute) {
  
  if (route[route.length - 1] === finish) {
    if (!bestRoute.route || bestRoute.cost > cost) {
      bestRoute.route = route;
      bestRoute.cost = cost;
    }
    return bestRoute;
  }
  
  if (bestRoute.route && bestRoute.cost < cost) {
    return null;
  }

  var availableRoads = roads.filter(function (r) {
    return r.from === route[route.length - 1] && route.indexOf(r.to) === -1;
  });

  if (!availableRoads.length) {
    return null;
  }
  
  availableRoads.map(function (r) { 
    var shallowRoute = route.slice(0);
    shallowRoute.push(r.to);
    explore(shallowRoute, cost + r.drivingTime, roads, finish, bestRoute);
  });

  return bestRoute;
}

GPS.prototype.navigate = function (intersections, roads, start, finish) {
  return explore([start], 0, roads, finish, { route: null, cost: 0 }).route;
};

module.exports = GPS;

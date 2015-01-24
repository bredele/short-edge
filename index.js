
/**
 * Multiply the pheromone on an
 * edge by its corresponding value (inverse 
 * of the cost/distance).
 *
 * This equation favors edges which are shorter and which
 * have a greater amount of pheromone. An optional ratio parameter
 * determines the relative importance of pheromone versus distance.
 *
 * @param {Number} pheromone
 * @param {Number} cost (or distance)
 * @param {Number?} ratio (default 2)
 * @param {Number}
 * @api public
 */

module.exports = function(pheromone, cost, ratio) {
  return pheromone * Math.pow(1 / cost, ratio || 2);
};
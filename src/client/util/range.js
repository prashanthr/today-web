export const getValueInRange = ({ min, max, value }) => {
  if (!value || value < min) {
    return min
  }
  if (value > max) {
    return max
  }
  return value
}

const formatNumber = (num) => {
  if (num == null || isNaN(num)) {
    return '0';
  }
  let formatted;
  if (num >= 1_000_000) {
    formatted = (num / 1_000_000).toFixed(1);
    formatted = parseFloat(formatted); 
    return formatted + 'M';
  } else if (num >= 1_000) {
    formatted = (num / 1_000).toFixed(1);
    formatted = parseFloat(formatted);
    return formatted + 'K';
  } else {
    return num.toString();
  }
};

export { formatNumber };

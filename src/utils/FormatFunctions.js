export function formatTimeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const secondsAgo = Math.floor((now - date) / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const weeksAgo = Math.floor(daysAgo / 7);

  if (weeksAgo > 0) {
    return `${weeksAgo} weeks ago`;
  } else if (daysAgo > 0) {
    return `${daysAgo} days ago`;
  } else if (hoursAgo > 0) {
    return `${hoursAgo} hours ago`;
  } else if (minutesAgo > 0) {
    return `${minutesAgo} minutes ago`;
  } else {
    return `${secondsAgo} seconds ago`;
  }
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumSignificantDigits: 3,
  }).format(amount);
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-AU", {
    month: "long",
    year: "numeric",
  });
}

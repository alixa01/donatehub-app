export function shortenAddress(addr) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}....`;
}

export function dateFormat(date) {
  if (!date) return "-";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("id-ID", options);
}

export function calculateDaysLeft(deadlineString) {
  const today = new Date();
  const deadlineDate = new Date(deadlineString);

  const timeDifference = deadlineDate.getTime() - today.getTime();

  if (timeDifference <= 0) {
    return 0;
  }

  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft;
}

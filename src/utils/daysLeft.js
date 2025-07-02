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

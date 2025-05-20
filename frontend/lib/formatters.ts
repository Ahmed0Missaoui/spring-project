/**
 * Format a number as currency (EUR)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

/**
 * Format a date in a localized format
 */
export function formatDate(date: string | Date): string {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Format a date range
 */
export function formatDateRange(startDate: string | Date, endDate: string | Date): string {
  if (!startDate || !endDate) return '';
  
  const start = formatDate(startDate);
  const end = formatDate(endDate);
  
  return `${start} - ${end}`;
}
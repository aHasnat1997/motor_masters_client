/**
 * Generate Unique ID Every time.
 * @returns {String} uniqueID.
 */
export default function uid() {
    const timestamp = new Date().getTime(); // Get current timestamp
    const random = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    const uniqueID = `${timestamp}_${random}`; // Combine timestamp and random number
    return uniqueID;
}
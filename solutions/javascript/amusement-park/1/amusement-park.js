/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId
  };
  throw new Error('Please implement the createVisitor function.');
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
  throw new Error('Please implement the revokeTicket function.');
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  if (!(ticketId in tickets)) return 'unknown ticket id';
  if (tickets[ticketId] === null) return 'not sold';
  return 'sold to ' + tickets[ticketId];
  throw new Error('Please implement the ticketStatus function.');
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
   if (!(ticketId in tickets)) return "invalid ticket !!!";
   const value = tickets[ticketId];
  if (value === null || value === undefined) return 'invalid ticket !!!';
  return value;
  throw new Error('Please implement the simpleTicketStatus function.');
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  if(visitor.gtc){
    if(visitor.gtc.signed){
      return visitor.gtc.version;
    }
  } else {
    return 
  }
  return 
  throw new Error('Please implement the gtcVersion function.');
}

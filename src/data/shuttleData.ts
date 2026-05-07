
export interface Branch {
  id: string;
  name: string;
  code: string;
}

export interface Shuttle {
  id: string;
  fromId: string;
  toId: string;
  departureTime: string; // HH:mm
  arrivalTime: string;   // HH:mm
  requiresPreviousDayOrder?: boolean;
  isEveningOvernight?: boolean;
  fridayArrivalOverride?: string;
  fridayArrivalDayOffset?: number;
}

export const BRANCHES: Branch[] = [
  { id: '60', name: 'Logistica', code: 'INTG60' },
  { id: '01', name: 'Milano', code: 'INTG01' },
  { id: '02', name: 'Peschiera', code: 'INTG02' },
  { id: '10', name: 'Pero', code: 'INTG10' },
  { id: '04', name: 'Lazzate', code: 'INTG04' },
  { id: '05', name: 'Verbania', code: 'INTG05' },
  { id: '06', name: 'Rivolta', code: 'INTG06' },
  { id: '07', name: 'Jerago', code: 'INTG07' },
  { id: '09', name: 'Buccinasco', code: 'INTG09' },
  { id: '11', name: 'Villasanta', code: 'INTG11' },
  { id: '12', name: 'Settimo', code: 'INTG12' },
];

export const SHUTTLES: Shuttle[] = [
  // 01 Milano
  { id: 'MI-H1', fromId: '01', toId: '60', departureTime: '07:10', arrivalTime: '08:15', requiresPreviousDayOrder: true },
  { id: 'MI-H2', fromId: '01', toId: '60', departureTime: '10:45', arrivalTime: '11:15' },
  { id: 'MI-H3', fromId: '01', toId: '60', departureTime: '13:00', arrivalTime: '13:45' },
  { id: 'MI-H4', fromId: '01', toId: '60', departureTime: '15:45', arrivalTime: '16:20' },
  { id: 'MI-H5', fromId: '01', toId: '60', departureTime: '18:30', arrivalTime: '19:30' },
  { id: 'H-MI1', fromId: '60', toId: '01', departureTime: '18:30', arrivalTime: '07:00', isEveningOvernight: true, fridayArrivalOverride: '08:00', fridayArrivalDayOffset: 1 },
  { id: 'H-MI2', fromId: '60', toId: '01', departureTime: '09:45', arrivalTime: '10:30' },
  { id: 'H-MI3', fromId: '60', toId: '01', departureTime: '12:00', arrivalTime: '12:45' },
  { id: 'H-MI4', fromId: '60', toId: '01', departureTime: '14:50', arrivalTime: '15:30' },

  // 02 Peschiera
  { id: 'PE-H1', fromId: '02', toId: '60', departureTime: '07:40', arrivalTime: '09:15', requiresPreviousDayOrder: true },
  { id: 'PE-H2', fromId: '02', toId: '60', departureTime: '10:30', arrivalTime: '11:15' },
  { id: 'PE-H3', fromId: '02', toId: '60', departureTime: '13:45', arrivalTime: '14:30' },
  { id: 'PE-H4', fromId: '02', toId: '60', departureTime: '15:30', arrivalTime: '16:15' },
  { id: 'H-PE1', fromId: '60', toId: '02', departureTime: '18:30', arrivalTime: '07:30', isEveningOvernight: true, fridayArrivalOverride: '08:00', fridayArrivalDayOffset: 1 },
  { id: 'H-PE2', fromId: '60', toId: '02', departureTime: '09:30', arrivalTime: '10:15' },
  { id: 'H-PE3', fromId: '60', toId: '02', departureTime: '12:50', arrivalTime: '13:30' },
  { id: 'H-PE4', fromId: '60', toId: '02', departureTime: '14:40', arrivalTime: '15:20' },

  // 04 Lazzate
  { id: 'LA-H1', fromId: '04', toId: '60', departureTime: '07:10', arrivalTime: '07:45', requiresPreviousDayOrder: true },
  { id: 'LA-H2', fromId: '04', toId: '60', departureTime: '10:15', arrivalTime: '10:45' },
  { id: 'LA-H3', fromId: '04', toId: '60', departureTime: '13:20', arrivalTime: '13:50' },
  { id: 'LA-H4', fromId: '04', toId: '60', departureTime: '15:20', arrivalTime: '15:45' },
  { id: 'H-LA1', fromId: '60', toId: '04', departureTime: '18:30', arrivalTime: '07:00', isEveningOvernight: true, fridayArrivalOverride: '08:00', fridayArrivalDayOffset: 1 },
  { id: 'H-LA2', fromId: '60', toId: '04', departureTime: '09:30', arrivalTime: '10:00' },
  { id: 'H-LA3', fromId: '60', toId: '04', departureTime: '12:50', arrivalTime: '13:10' },
  { id: 'H-LA4', fromId: '60', toId: '04', departureTime: '14:50', arrivalTime: '15:10' },

  // 05 Verbania
  { id: 'VE-H1', fromId: '05', toId: '60', departureTime: '07:40', arrivalTime: '10:30', requiresPreviousDayOrder: true },
  { id: 'VE-H2', fromId: '05', toId: '60', departureTime: '13:45', arrivalTime: '15:00' },
  { id: 'VE-H3', fromId: '05', toId: '60', departureTime: '16:00', arrivalTime: '17:00' },
  { id: 'H-VE1', fromId: '60', toId: '05', departureTime: '18:30', arrivalTime: '07:30', isEveningOvernight: true, fridayArrivalOverride: '07:30', fridayArrivalDayOffset: 1 },
  { id: 'H-VE2', fromId: '60', toId: '05', departureTime: '12:30', arrivalTime: '13:30' },
  { id: 'H-VE3', fromId: '60', toId: '05', departureTime: '14:40', arrivalTime: '15:55' },

  // 06 Rivolta
  { id: 'RI-H1', fromId: '06', toId: '60', departureTime: '10:10', arrivalTime: '11:00', requiresPreviousDayOrder: true },
  { id: 'RI-H2', fromId: '06', toId: '60', departureTime: '13:15', arrivalTime: '14:00' },
  { id: 'RI-H3', fromId: '06', toId: '60', departureTime: '15:40', arrivalTime: '16:30' },
  { id: 'H-RI1', fromId: '60', toId: '06', departureTime: '18:30', arrivalTime: '07:30', isEveningOvernight: true, fridayArrivalOverride: '07:30', fridayArrivalDayOffset: 1 },
  { id: 'H-RI2', fromId: '60', toId: '06', departureTime: '09:00', arrivalTime: '09:50' },
  { id: 'H-RI3', fromId: '60', toId: '06', departureTime: '12:15', arrivalTime: '13:00' },
  { id: 'H-RI4', fromId: '60', toId: '06', departureTime: '14:40', arrivalTime: '15:30' },

  // 07 Jerago
  { id: 'JE-H1', fromId: '07', toId: '60', departureTime: '10:15', arrivalTime: '10:45', requiresPreviousDayOrder: true },
  { id: 'JE-H2', fromId: '07', toId: '60', departureTime: '13:15', arrivalTime: '13:45' },
  { id: 'JE-H3', fromId: '07', toId: '60', departureTime: '15:20', arrivalTime: '16:00' },
  { id: 'H-JE1', fromId: '60', toId: '07', departureTime: '18:30', arrivalTime: '07:30', isEveningOvernight: true, fridayArrivalOverride: '07:30', fridayArrivalDayOffset: 1 },
  { id: 'H-JE2', fromId: '60', toId: '07', departureTime: '09:30', arrivalTime: '10:00' },
  { id: 'H-JE3', fromId: '60', toId: '07', departureTime: '12:30', arrivalTime: '13:00' },
  { id: 'H-JE4', fromId: '60', toId: '07', departureTime: '14:40', arrivalTime: '15:10' },

  // 09 Buccinasco
  { id: 'BU-H1', fromId: '09', toId: '60', departureTime: '07:40', arrivalTime: '08:30', requiresPreviousDayOrder: true },
  { id: 'BU-H2', fromId: '09', toId: '60', departureTime: '10:15', arrivalTime: '10:45' },
  { id: 'BU-H3', fromId: '09', toId: '60', departureTime: '13:15', arrivalTime: '13:45' },
  { id: 'BU-H4', fromId: '09', toId: '60', departureTime: '15:20', arrivalTime: '15:50' },
  { id: 'H-BU1', fromId: '60', toId: '09', departureTime: '18:30', arrivalTime: '07:30', isEveningOvernight: true, fridayArrivalOverride: '07:30', fridayArrivalDayOffset: 1 },
  { id: 'H-BU2', fromId: '60', toId: '09', departureTime: '09:30', arrivalTime: '10:00' },
  { id: 'H-BU3', fromId: '60', toId: '09', departureTime: '12:30', arrivalTime: '13:00' },
  { id: 'H-BU4', fromId: '60', toId: '09', departureTime: '14:40', arrivalTime: '15:10' },

  // 10 Pero
  { id: 'PR-H1', fromId: '10', toId: '60', departureTime: '09:15', arrivalTime: '09:20', requiresPreviousDayOrder: true },
  { id: 'PR-H2', fromId: '10', toId: '60', departureTime: '10:15', arrivalTime: '10:20' },
  { id: 'PR-H3', fromId: '10', toId: '60', departureTime: '11:15', arrivalTime: '11:20' },
  { id: 'PR-H4', fromId: '10', toId: '60', departureTime: '12:15', arrivalTime: '12:20' },
  { id: 'PR-H5', fromId: '10', toId: '60', departureTime: '13:00', arrivalTime: '13:05' },
  { id: 'PR-H6', fromId: '10', toId: '60', departureTime: '14:15', arrivalTime: '14:20' },
  { id: 'PR-H7', fromId: '10', toId: '60', departureTime: '15:15', arrivalTime: '15:20' },
  { id: 'PR-H8', fromId: '10', toId: '60', departureTime: '16:15', arrivalTime: '16:20' },
  { id: 'PR-H9', fromId: '10', toId: '60', departureTime: '17:15', arrivalTime: '17:20' },
  { id: 'PR-H10', fromId: '10', toId: '60', departureTime: '18:30', arrivalTime: '18:40' },
  { id: 'H-PR1', fromId: '60', toId: '10', departureTime: '08:45', arrivalTime: '08:50' },
  { id: 'H-PR2', fromId: '60', toId: '10', departureTime: '09:45', arrivalTime: '09:50' },
  { id: 'H-PR3', fromId: '60', toId: '10', departureTime: '10:45', arrivalTime: '10:50' },
  { id: 'H-PR4', fromId: '60', toId: '10', departureTime: '11:45', arrivalTime: '11:50' },
  { id: 'H-PR5', fromId: '60', toId: '10', departureTime: '12:30', arrivalTime: '12:35' },
  { id: 'H-PR6', fromId: '60', toId: '10', departureTime: '13:45', arrivalTime: '13:50' },
  { id: 'H-PR7', fromId: '60', toId: '10', departureTime: '14:45', arrivalTime: '14:50' },
  { id: 'H-PR8', fromId: '60', toId: '10', departureTime: '15:45', arrivalTime: '15:50' },
  { id: 'H-PR9', fromId: '60', toId: '10', departureTime: '16:45', arrivalTime: '16:50' },
  { id: 'H-PR10', fromId: '60', toId: '10', departureTime: '17:30', arrivalTime: '17:35' },
  { id: 'H-PR11', fromId: '60', toId: '10', departureTime: '18:30', arrivalTime: '07:30', isEveningOvernight: true, fridayArrivalOverride: '08:00', fridayArrivalDayOffset: 1 },

  // 11 Villasanta
  { id: 'VI-H1', fromId: '11', toId: '60', departureTime: '07:40', arrivalTime: '09:15', requiresPreviousDayOrder: true },
  { id: 'VI-H2', fromId: '11', toId: '60', departureTime: '10:00', arrivalTime: '10:50' },
  { id: 'VI-H3', fromId: '11', toId: '60', departureTime: '13:00', arrivalTime: '13:45' },
  { id: 'VI-H4', fromId: '11', toId: '60', departureTime: '15:30', arrivalTime: '16:15' },
  { id: 'H-VI1', fromId: '60', toId: '11', departureTime: '18:30', arrivalTime: '07:00', isEveningOvernight: true, fridayArrivalOverride: '08:00', fridayArrivalDayOffset: 1 },
  { id: 'H-VI2', fromId: '60', toId: '11', departureTime: '09:00', arrivalTime: '09:45' },
  { id: 'H-VI3', fromId: '60', toId: '11', departureTime: '12:00', arrivalTime: '12:45' },
  { id: 'H-VI4', fromId: '60', toId: '11', departureTime: '14:30', arrivalTime: '15:15' },

  // 12 Settimo
  { id: 'SE-H1', fromId: '12', toId: '60', departureTime: '18:15', arrivalTime: '07:30', isEveningOvernight: true },
  { id: 'H-SE1', fromId: '60', toId: '12', departureTime: '18:30', arrivalTime: '08:00', isEveningOvernight: true, fridayArrivalOverride: '08:00', fridayArrivalDayOffset: 3 },
  { id: 'SE-PR1', fromId: '12', toId: '10', departureTime: '18:00', arrivalTime: '07:30', isEveningOvernight: true, fridayArrivalOverride: '08:00', fridayArrivalDayOffset: 1 },
];


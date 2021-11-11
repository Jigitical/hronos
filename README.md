Functions:

Definition: nextDay(dateTime: Date | string): string

Description: Returns next day 

Example:

import {nextDay} from 'hronos'

console.log(nextDay('2003-03-04'))

Returns: Wed Mar 05 2003 02:00:00 GMT+0200

---------------------------------

Definition: previousDay(dateTime: Date | string): string

Description: Returns previous day

Example:

import {previousDay} from 'hronos'

console.log(previousDay('2003-03-04'))

Returns: Mon Mar 03 2003 02:00:00 GMT+0200

----------------------------------

Definition: getDifference(dateTimeStart: Date | string, dateTimeEnd: Date | string): string

Description: Returns difference between two dates

Example:

import {getDifference} from 'hronos'

console.log(getDifference('2003-03-04 14:12:42', '2003-04-05 15:12:13'))

Returns: 31d 23h 59m 31s


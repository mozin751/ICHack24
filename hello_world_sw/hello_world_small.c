#include <sys/alt_stdio.h>
#include <stdio.h>
#include "altera_avalon_pio_regs.h"
#include "system.h"

int hex_to_7seg(int hex_input);

int hex_to_7seg(int hex_input){
	switch(hex_input){
	case 0:
		return 0b1000000;
	case 1:
		return 0b1111001;
	case 2:
		return 0b0100100;
	case 3:
		return 0b0110000;
	case 4:
		return 0b0011001;
	case 5:
	    return 0b0010010;
	case 6:
	    return 0b0000010;
	case 7:
	    return 0b1111000;
	case 8:
	    return 0b0000000;
	case 9:
	    return 0b0010000;
	case 0xA: // For hexadecimal digit A
	    return 0b0001000;
	case 0xB:
		return 0b0000011;
	case 0xC:
		return 0b1000110;
	 case 0xD:
	    return 0b0100001;
	 case 0xE:
	    return 0b0000110;
	  case 0xF:
	    return 0b0001110;
	}
}

int main()
{
	int switch_datain, hex0_datain, hex1_datain, hex2_datain, hex3_datain, previous_switch, button_datain;
	alt_putstr("Hello from Nios II!\n");
	alt_putstr("When you press Push Button 0,1 the switching on of the LEDs is done by software\n");
	alt_putstr("But, Switching on/off of LED 2 by SW 2 is done by hardware\n");
	/* Event loop never exits. Read the PB, display on the LED */

	while (1)
	{
		//Gets the data from the pb, recall that a 0 means the button is pressed
		if (IORD_ALTERA_AVALON_PIO_DATA(SWITCH_BASE) != previous_switch){
			switch_datain = IORD_ALTERA_AVALON_PIO_DATA(SWITCH_BASE);
			//Mask the bits so the leftmost LEDs are off (we only care about LED3-0)
			//Send the data to the LED
			IOWR_ALTERA_AVALON_PIO_DATA(LED_BASE,switch_datain);

			hex0_datain = switch_datain & 0xF;
			IOWR_ALTERA_AVALON_PIO_DATA(HEX0_BASE, hex_to_7seg(hex0_datain));

			hex1_datain = switch_datain & 0xF0;
			hex1_datain = hex1_datain >> 4;
			IOWR_ALTERA_AVALON_PIO_DATA(HEX1_BASE, hex_to_7seg(hex1_datain));

			hex2_datain = switch_datain & 0xF00;
			hex2_datain = hex2_datain >> 8;
			IOWR_ALTERA_AVALON_PIO_DATA(HEX2_BASE, hex_to_7seg(hex2_datain));

			hex3_datain = switch_datain & 0xF000;
			hex3_datain = hex3_datain >> 12;
			IOWR_ALTERA_AVALON_PIO_DATA(HEX3_BASE, hex_to_7seg(hex3_datain));

			IOWR_ALTERA_AVALON_PIO_DATA(HEX4_BASE, hex_to_7seg(0));
			IOWR_ALTERA_AVALON_PIO_DATA(HEX5_BASE, hex_to_7seg(0));

			previous_switch = switch_datain;
		}
		}

	return 0;
}




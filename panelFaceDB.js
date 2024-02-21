export const panelFacesDB = {

    // ------------ X-FACES---------------
    'X0': {
        leg: 'LEG',
        mainDiagonal: 'BR1',
        mainHorizontal: 0,
        secondaryDiagonals: 0,
        secondaryHorizontal: 0,
        panelType: 'X',
        subdivide: 0
    },
    'X': {
        leg: 'LEG',
        mainDiagonal: 'BR1',
        mainHorizontal: /H|H1/,
        secondaryDiagonals: 0,
        secondaryHorizontal: 0,
        panelType: 'X',
        subdivide: 0
    },
    'XH1': {
        leg: 'LEG',
        mainDiagonal: 'BR1',
        mainHorizontal: 0,
        secondaryDiagonals: 0,
        secondaryHorizontal: [/\bH\b|\bH1\b/],
        panelType: 'X',
        subdivide: 1
    },
    'XH3': {
        leg: 'LEG',
        mainDiagonal: 'BR1',
        mainHorizontal: 0,
        secondaryDiagonals: /\bR\b|\bR1\b/,     // regex for panels having same redundants
        secondaryHorizontal: [/\bR\b|\bR1\b/, /\bH\b|\bH1\b/, /\bR\b|\bR1\b/],
        panelType: 'X',
        subdivide: 3
    },
    'XH3A': {
        leg: 'LEG',
        mainDiagonal: 'BR1',
        mainHorizontal: 0,
        secondaryDiagonals: ['R3', 'R2'],      // array of mst ids from bottom to top for panels having different redundants
        secondaryHorizontal: [/\bR4\b/, /\bH\b|\bH1\b/, /\bR1\b/],
        panelType: 'X',
        subdivide: 3
    },

    //--------------- K-FACES------------
    'K': {
        leg: 'LEG',
        mainDiagonal: 'BR1',
        mainHorizontal: /H|H1/,
        secondaryDiagonals: 0,
        secondaryHorizontal: 0,
        panelType: 'A',
        subdivide: 0
    },
    'K1': {
        leg: 'LEG',
        mainDiagonal: 'BR1',
        mainHorizontal: /H|H1/,
        secondaryDiagonals: /\bR\b|\bR1\b/,
        secondaryHorizontal: [/\bR\b|\bR1\b/],
        panelType: 'A',
        subdivide: 1
    },
    'K2': {
        leg: 'LEG',
        mainDiagonal: 'BR1',
        mainHorizontal: /H|H1/,
        secondaryDiagonals: /\bR\b|\bR1\b/,
        secondaryHorizontal: [/\bR\b|\bR1\b/],
        panelType: 'A',
        subdivide: 2
    },
    'K2A': {
        leg: 'LEG',
        mainDiagonal: 'BR1',
        mainHorizontal: /H|H1/,
        secondaryDiagonals: ['R3', 'R1'],
        secondaryHorizontal: [/\bR4\b/, /\bR2\b/],
        panelType: 'A',
        subdivide: 2
    }
}

let legMSTId = []
let legASMId = []
let legSections = []
let mainDiagonalMSTIds = []
let mainDiagonalASMId = []
let mainDiagonalSections = []
let uniqueSections = []
let allSections = []
let uniqueSectionAndGrade = []

// make an array of sections
// make an array of unique sections
// make an array of mstIds
// make an array of asmIds

function createSections(towerData) {
    // const regex = /EA|CHS/;     // add more to the regex to filter out more sections // will use this later
    towerData.forEach((line, lineIndex) => {
        if ( line.includes('BH')) {
            let section = line[1]
            line.forEach((word, wordIndex) => {
                if (word === 'FY') {
                    let grade = line[wordIndex + 1]
                    allSections.push(section + ' ' + grade)
                }
            });
        }
    });
    
    // create an array which only has unique section
    const set = new Set(allSections)
    set.forEach(element => {
        uniqueSectionAndGrade.push(element)
        let sectionAndGrade = element.split(' ')
        // console.log(sectionAndGrade);
        uniqueSections.push(sectionAndGrade)
    });
    console.log(uniqueSections);    // #CHECK : grade needs validation whether valid grade or not

}

let selectedSection = [];
let asmSections = []

function createSelectedSections (towerData) {
    // different regex to check the type of section, whether it is EA or CHS or DAS etc.
    let EAregex = /EA/ ;
    let CHSregex = /CHS/;
    let DASregex = /DAS/;

    let asmSectionType = '';
    let asmStandard = 'User Defined';
    let asmSectionName = '';
    let asmBuiltUpType = ' ';
    let asmBuiltUpSide = '';
    let asmGap = 0;
    let asmMaterialStandard = 'User Defined';
    let asmMaterialGrade = ' ';
    let asmComments = ' ';

    createSections(towerData)
    uniqueSections.forEach((section,index) => {
        // for now this will work only with equal angles and later we can add checks to include CHS or other types of sections.
        if (EAregex.test(section[0])) {
            asmSectionType = 'Equal Angle'
            asmBuiltUpType = 'S'
        }
        asmSectionName = section[0];
        asmMaterialGrade = `S${section[1]}`;
        let selectedSectionLine = `${asmSectionType}\t${asmStandard}\t${asmSectionName}\t${asmBuiltUpType}\t${asmBuiltUpSide}\t${asmGap}\t${asmMaterialStandard}\t${asmMaterialGrade}\n`
        // let selectedSectionLine = `${asmSectionType},${asmStandard},${asmSectionName},${asmBuiltUpType},${asmBuiltUpSide},${asmGap},${asmMaterialStandard},${asmMaterialGrade}\n`;
        selectedSection.push(selectedSectionLine);
    });
    selectedSection = selectedSection.join('')
    selectedSection = selectedSection.replaceAll('X', 'x')
    // selectedSection = selectedSection.replaceAll(',', '\n')

    return selectedSection;
}

export { createSelectedSections, uniqueSectionAndGrade }
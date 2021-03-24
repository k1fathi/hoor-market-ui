export const courses = ['turkce', 'matematik', 'fen_bilimleri', 'sosyal_bilgiler'];

export const const_years = ["2017-2018", "2018-2019"];

export const url = "https://meb-opdp.reactors.cloud/";

export function getParams(id) {
    return {
        okul_id: id,
        turkce_alt: 65,
        turkce_ust: 90,
        matematik_alt: 55,
        matematik_ust: 85,
        fen_alt: 65,
        fen_ust: 90,
        sosyal_alt: 65,
        sosyal_ust: 90,
        '5_sinif_alt_ek': 5
    };
}

export function getCourseName(course) {
    let name;
    switch (course) {
        case 'turkce':
            name = 'Türkçe';
            break;
        case 'matematik':
            name = 'Matematik';
            break;
        case 'fen_bilimleri':
            name = 'Fen Bilimleri';
            break;
        case 'sosyal_bilgiler':
            name = 'Sosyal Bilgiler';
            break;
        default:
        // code block
    }

    return name;
}

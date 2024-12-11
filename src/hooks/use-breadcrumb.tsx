import { useParams, usePathname } from "next/navigation";

const removeSlug = (param: string, search: string) => {
    switch (param) {
    case 'idProduct':
        return search.includes('productChannel') ? 'Detail Product Channel' : 'Detail Product';
    case 'slug':
        return 'Detail Produk';
    case 'id':
        return 'Detail';
    case 'create':
        return 'Tambah';
    case 'edit':
        return 'Ubah';
    default:
        return param.split('-').join(' ');
    }
};

export const useBreadcrumb = () => {
    const params = useParams();
    const pathname = usePathname();
    const generate = () => {
        const entri = Object.entries(params);
        const pathnameArray = pathname.split('/').filter((item) => item);
        const path = pathname
            .split('/')
            .filter((x) => x !== '')
            .map((item, index) => {
                const findI = entri.find((p) => p[1] === item);
                return {
                    title: removeSlug(findI ? findI[0] : item, location?.search),
                    path: '/' + pathnameArray.slice(0, index + 1).join('/'),
                };
            })
            .filter((x) => x.title !== '');

        return path;
    };

    return generate();
};

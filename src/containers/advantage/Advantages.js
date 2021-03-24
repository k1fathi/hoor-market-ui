import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../../store/actions";
import {TableRow, IconButton, TablePagination } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {withRouter} from "react-router";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import DateFormat from "../../components/DateFormat";
import PageLoading from "../../components/PageLoading";
import {setMessage} from "../../store/actions";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import DeleteIcon from '@material-ui/icons/Delete';
import sortBy from "lodash/sortBy";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import deburr from "lodash/deburr";

const columns = [
    { id: 'no', label: 'No'},
    { id: 'image', label: ''},
    { id: 'title', label: 'Başlık', sort: true},
    { id: 'categoryName', label: 'Kategori', sort: true},
    { id: 'statusText', label: 'Durum', sort: true},
    { id: 'edit', label: ''},
];

const categories = [{
    "id":"c666a91a-af26-4847-95c1-6759e0444b27",
    "name":"Yiyecek"
}]


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    loading: {
        display: "flex",
        width: '100%',
        height: 440,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        // maxHeight: 440,
    },
    btn:{
        background: '#4299e1'
    }
});



function Advantages(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {loading} = useSelector(state => state.settings.layout);

    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [sort, setSort] = useState(true);
    const [localAdvantages, setLocalAdvantages] = useState([
        {
            "id":"66eda7c9-1112-4547-b01c-0297dab7a035",
            "title":"YEMEKSEPETİ yıl sonu kampanyası",
            "createDate":"2020-12-24T12:27:47.4038628",
            "status":0,
            "statusText":"Aktif",
            "categoryName":"Yiyecek",
            "categoryId":"c666a91a-af26-4847-95c1-6759e0444b27",
        },
        {
            "id":"66eda7c9-1112-4547-b01c-0297dab7a035",
            "title":"asYEMEKSEPETİ yıl sonu kampanyası",
            "createDate":"2020-12-24T12:27:47.4038628",
            "status":1,
            "statusText":"Pasif",
            "categoryName":"Yiyecek",
            "categoryId":"c666a91a-af26-4847-95c1-6759e0444b27",
        }
    ]);


    useEffect(() => {

    }, []);


    useEffect(()=>{
        let ads = [];
        if(selectedCategory){
            localAdvantages.map(ad => {
                if ( ad.categoryId === selectedCategory) {
                    ads.push(ad);
                }
            })
            setLocalAdvantages(sortBy(ads, ['createDate'], [false]).reverse());
        }else{
            setLocalAdvantages(sortBy(localAdvantages, ['createDate'], [false]).reverse());
        }
    },[selectedCategory]);

    function handleSortClick(cat){
        setSort(!sort);
        let ads = sortBy(localAdvantages, [advantage => advantage[cat] && typeof advantage[cat] !== 'number' ?
            deburr(advantage[cat]).toLowerCase(): advantage[cat] ||  advantage[cat] === 0 ? advantage[cat] : null], [false]);
        if(sort){
            setLocalAdvantages(ads.reverse());
        }else{
            setLocalAdvantages(ads);
        }
    }

    function handleClick(item)
    {

    }

    function changeStatus(advantage_id, status)
    {
    }

    if (loading) {
        return (
            <PageLoading/>
        )
    }

    return (
        <div>
            <div className="flex justify-between py-4 px-8 shadow-md">
                <p className="text-lg font-bold">Avantajlar</p>

                <div className="flex">
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state" onChange={(event)=>{
                        if(event.target.value == -1){
                            setSelectedCategory(null);
                        }else{
                            setSelectedCategory(event.target.value)
                        }
                    }}>
                        <option
                            selected={!selectedCategory}
                            value={-1}
                            // onClick={() => {
                            //     setSelectedCategory(null);
                            // }}
                        >
                            Tümü
                        </option>
                        {
                            categories.map(category => {
                                return (
                                    <option
                                        selected={selectedCategory === category.id}
                                        value={category.id}
                                        // onClick={() => {
                                        //     setSelectedCategory(category.id);
                                        // }}
                                    >
                                        {category.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <div className="pl-8 flex items-center">
                        <Button variant="contained"
                                color="primary"
                                startIcon={<AddIcon/>}
                                onClick={() => props.history.push('/avantajlar/create/new')}
                        >
                            <p className="text-white font-bold">Oluştur</p>
                        </Button>
                    </div>
                </div>
            </div>
            <Paper className="w-full p-8">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="sticky table">
                        <TableHead className="bg-gray-200">
                            <TableRow >
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                    >
                                        <div className="font-semibold flex">
                                            <span className="self-center">{column.label}</span>
                                            {column.sort ?
                                                <IconButton onClick={()=>handleSortClick(column.id)}>
                                                    <ImportExportIcon />
                                                </IconButton>
                                                : null }
                                        </div>

                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {localAdvantages && localAdvantages
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    // if (!selectedCategory ||selectedCategory === row.categoryId) {
                                        return (

                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.id}
                                                style={row.status === 2 ? {opacity: 0.5}: null}
                                            >

                                                <TableCell className="w-8" id={labelId} scope="row" onClick={() => handleClick(row)}>
                                                    {(page * rowsPerPage + index + 1)}
                                                </TableCell>
                                                <TableCell className="w-1/12" component="th" id={labelId} scope="row" onClick={() => handleClick(row)}>
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row" onClick={() => handleClick(row)}>
                                                    {row.title}
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row">
                                                    {row.statusText}
                                                </TableCell>
                                                <TableCell component="th" id={labelId} scope="row">
                                                    {
                                                        row.status !== 2 && (
                                                            <div>
                                                                <IconButton onClick={() => {}}>
                                                                    <EditIcon />
                                                                </IconButton>
                                                                <IconButton onClick={() => changeStatus(row.id, "deactivate")}>
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </div>
                                                        )
                                                    }
                                                </TableCell>

                                            </TableRow>

                                        );
                                    // }
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    labelRowsPerPage={"Sayfa başına satır"}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={localAdvantages && localAdvantages.length > 0 ? localAdvantages.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={(event, newPage) => setPage(newPage)}
                    onChangeRowsPerPage={(event) => {
                        setRowsPerPage(parseInt(event.target.value, 10));
                        setPage(0);
                    }}
                />
            </Paper>
        </div>
    );
}

export default withRouter(Advantages);
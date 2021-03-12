// import React from 'react';
import React, {useState} from 'react';
import "./Dashboard.css";
import Logo from '../../assets/img/bs.png';
import GridTable from '@nadavshaar/react-grid-table';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { DialogActions } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import {
  Grid,
} from '@material-ui/core';
const DialogTitle = withStyles(theme => ({
    root: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(),
      top: theme.spacing(),
      color: theme.palette.grey[500],
    },
	}))(props => {
	const { children, classes, onClose } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root}>
		<Typography variant="h6">{children}</Typography>
		{onClose ? (
			<IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
			<CloseIcon />
			</IconButton>
		) : null}
		</MuiDialogTitle>
	);
});
  
const DialogContent = withStyles(theme => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);
function DashboardPage(props) {
    
    const [setSelectedFile] = useState(null);
    const [showTable, setShowTable] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }
    const onFileUpload = () => {
        setShowTable(true);
    }
    const showDeleteModal = (data) => {
        setOpenDeleteModal(true);
    }
    const showEditModal = (data) => {
        setOpenEditModal(true);
    }
    const closeDeleteModal = (data) => {
        setOpenDeleteModal(false);
    }
    const closeEditModal = (data) => {
        setOpenEditModal(false);
    }
    const serialNo = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
                <span className='rgt-text-truncate' style={{marginLeft: 10}}>{rowIndex}</span>
            </div>
        )
    }
    const actionTemplate = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
                <button className="btn btn-primary" style={{margin: 5}} onClick={() => showEditModal(data)}><i className="fas fa-pencil-alt"></i></button>
                <button className="btn btn-danger" style={{margin: 5}} onClick={() => showDeleteModal(data)}><i className="fas fa-trash"></i></button>
            </div>
        )
    }
    const columns = [
        {
            id: 1, 
            field: 'serial', 
            label: '#',
            cellRenderer: serialNo,
        }, 
        {
            id: 2, 
            field: 'address', 
            label: 'Address',
        },
        {
            id: 3, 
            field: 'cdr_date', 
            label: 'CDR Date',
        },
        {
            id: 4, 
            field: 'building_sf', 
            label: 'Building SF / Gross Floor Area',
        },
        {
            id: 5, 
            field: 'multi_family_units', 
            label: 'Multi-family Units',
        },
        {
            id: 6, 
            field: 'artist_studios', 
            label: 'Artist Studios',
        },
        {
            id: 7, 
            field: 'max_building_height', 
            label: 'Max Building Height',
        },
        {
            id: 8, 
            field: 'max_no_of_stories', 
            label: 'Max # of Stories',
        },
        {
            id: 9, 
            field: 'retail_square_footage', 
            label: 'Retail/Commercial Square Footage',
        },
        {
            id: 10, 
            field: 'parking_spaces', 
            label: 'Parking Spaces',
        },
        {
            id: 11, 
            field: 'bike_spaces', 
            label: 'Bike Spaces',
        },
        {
            id: 12, 
            field: 'architect', 
            label: 'Architect',
        },
        {
            id: 13, 
            field: 'developer', 
            label: 'Developer',
        },
        {
            id: 14, 
            field: 'site_area', 
            label: 'Site Area',
        },
        {
            id: 15, 
            field: 'picture1', 
            label: 'File Name of Picture 1',
        },
        {
            id: 16, 
            field: 'picture2', 
            label: 'File Name of Picture 2',
        },
        {
            id: 17, 
            field: 'original_file_name', 
            label: 'Original File Name',
        },
        {
            id: 18, 
            field: 'latitude', 
            label: 'Latitude',
        },
        {
            id: 19, 
            field: 'longitude', 
            label: 'Longitude',
        },
        {
            id: 20, 
            field: 'action', 
            label: 'Action',
            cellRenderer: actionTemplate,
        }
    ];
    const rows = [
        { 
            "id": 1, 
            "username": "wotham0", 
            "gender": "Male", 
            "last_visited": "12/08/2019", 
            "test": "5", 
            "avatar":"https://robohash.org/atquenihillaboriosam.bmp?size=32x32&set=set1"
        },
        { 
            "id": 2, 
            "username": "dbraddon2", 
            "gender": "Female", 
            "last_visited": "16/07/2018", 
            "test": "6", 
            "avatar":"https://robohash.org/etsedex.bmp?size=32x32&set=set1"
        },
        { 
            "id": 3, 
            "username": "dridett3", 
            "gender": "Male", 
            "last_visited": "20/11/2016", 
            "test": "7", 
            "avatar":"https://robohash.org/inimpeditquam.bmp?size=32x32&set=set1"
        },
        { 
            "id": 4, 
            "username": "gdefty6", 
            "gender": "Female", 
            "last_visited": "03/08/2019", 
            "test": "8", 
            "avatar":"https://robohash.org/nobisducimussaepe.bmp?size=32x32&set=set1"
        },
        { 
            "id": 5, 
            "username": "hbeyer9", 
            "gender": "Male", 
            "last_visited": "10/10/2016", 
            "test": "9", 
            "avatar":"https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1"
        }
    ];
    const onSubmit = async values => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(300);
        window.alert(JSON.stringify(values, 0, 2));
      };
    const validate = values => {
        const errors = {};
        if (!values.address) {
          errors.address = 'Required';
        }
        if (!values.building_sf) {
          errors.building_sf = 'Required';
        }
        if (!values.multi_family_units) {
          errors.multi_family_units = 'Required';
        }
        if (!values.artist_studios) {
            errors.artist_studios = 'Required';
        }
        if (!values.max_building_height) {
            errors.max_building_height = 'Required';
        }
        if (!values.max_no_of_stories) {
            errors.max_no_of_stories = 'Required';
        }
        if (!values.retail_square_footage) {
            errors.retail_square_footage = 'Required';
        }
        if (!values.parking_spaces) {
            errors.parking_spaces = 'Required';
        }
        if (!values.bike_spaces) {
            errors.bike_spaces = 'Required';
        }
        if (!values.architect) {
            errors.architect = 'Required';
        }
        if (!values.developer) {
            errors.developer = 'Required';
        }
        if (!values.site_area) {
            errors.site_area = 'Required';
        }
        if (!values.original_file_name) {
            errors.original_file_name = 'Required';
        }
        if (!values.latitude) {
            errors.latitude = 'Required';
        }
        if (!values.longitude) {
            errors.longitude = 'Required';
        }
        return errors;
      };
    return (
        <div className="container-fluid dashboard-page">
            <header className="container">
                <nav className="navbar fixed-top navbar-light bg-light">
                    <div className="navbar-brand"><img src={Logo} width="30" height="30" alt=""/></div>
                </nav>
            </header>
            <div className="main-content-dashboard">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <input type="file" onChange={onFileChange} />
                            <button className="btn btn-primary" onClick={onFileUpload}>Submit</button>
                        </div>
                        {
                            showTable &&
                            <div className="mt-5">
                                <GridTable columns={columns} rows={rows} />
                            </div>
                        }
						<Dialog
							onClose={closeDeleteModal}
							aria-labelledby="customized-dialog-title"
							open={openDeleteModal}
							maxWidth={"sm"}
							fullWidth={true}
							scroll={'paper'}
							>
							<DialogTitle onClose={closeDeleteModal} className="offering-detail-title">Confirmation</DialogTitle>
							<DialogContent>
                                <h5> Are you sure you want to delete this record </h5>
							</DialogContent>
                            <DialogActions style={{ display: 'block' }}>
                                <Button style={{ marginLeft: 10, marginRight: 10 }} variant="contained" size="large" color="primary" onClick={() => closeDeleteModal()}> Confirm </Button>
                                <Button style={{ marginLeft: 10, marginRight: 10 }} variant="contained" size="large" color="secondary" onClick={() => closeDeleteModal()}>Cancel</Button>
                            </DialogActions>
						</Dialog>
                        <Dialog
							onClose={closeEditModal}
							aria-labelledby="customized-dialog-title"
							open={openEditModal}
							maxWidth={"md"}
							fullWidth={true}
							scroll={'paper'}
							>
							<DialogTitle onClose={closeEditModal} className="offering-detail-title">Update Record</DialogTitle>
							<DialogContent>
								<div className="col-md-12">
                                    <Form
                                        onSubmit={onSubmit}
                                        initialValues={{ employed: true, stooge: 'larry' }}
                                        validate={validate}
                                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                                        <form onSubmit={handleSubmit} noValidate>
                                            <Grid container alignItems="flex-start" spacing={2}>
                                                <Grid item xs={6}>
                                                <Field
                                                    fullWidth
                                                    required
                                                    name="address"
                                                    component={TextField}
                                                    type="text"
                                                    label="Address"
                                                />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="building_sf"
                                                        component={TextField}
                                                        type="text"
                                                        label="Building SF"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="multi_family_units"
                                                        component={TextField}
                                                        type="text"
                                                        label="Multi family units"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="artist_studios"
                                                        component={TextField}
                                                        type="text"
                                                        label="Artist Studios"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="max_building_height"
                                                        component={TextField}
                                                        type="text"
                                                        label="Max building height"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="max_no_of_stories"
                                                        component={TextField}
                                                        type="text"
                                                        label="Max # of stories"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="retail_square_footage"
                                                        component={TextField}
                                                        type="text"
                                                        label="Retail square footage"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="parking_spaces"
                                                        component={TextField}
                                                        type="text"
                                                        label="Parking spaces"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="bike_spaces"
                                                        component={TextField}
                                                        type="text"
                                                        label="Bike spaces"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="architect"
                                                        component={TextField}
                                                        type="text"
                                                        label="Architect"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="developer"
                                                        component={TextField}
                                                        type="text"
                                                        label="Developer"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="site_area"
                                                        component={TextField}
                                                        type="text"
                                                        label="Site area"
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Field
                                                        fullWidth
                                                        required
                                                        name="original_file_name"
                                                        component={TextField}
                                                        type="text"
                                                        label="Original file name"
                                                    />
                                                </Grid>
                                                
                                                
                                                <Grid item style={{ marginTop: 16 }}>
                                                <Button
                                                    type="button"
                                                    variant="contained"
                                                    onClick={reset}
                                                    disabled={submitting || pristine}
                                                >
                                                    Reset
                                                </Button>
                                                </Grid>
                                                <Grid item style={{ marginTop: 16 }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    disabled={submitting}
                                                >
                                                    Submit
                                                </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                        )}
                                    />
								</div>
							</DialogContent>
						</Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashboardPage;

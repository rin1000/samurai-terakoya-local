import { useParams, Link, useNavigate } from 'react-router-dom'
export const BookDetail = () => {
    return(
        <>
        <Container component="section" maxWidth="md"
            sx={{mt:5}}>
            <Card sx={{ height: '100%'}}>
                <Grid container>
                    <Grid item sm={4}>
                        <CardMedia 
                            component="img"
                            image={book.image}
                            alt={book.title } />
                    </Grid>
                    <Grid item sm={8}>
                        <CardContent>
                            <Typography sx={{ mb:2, fontSize: '18px'}}>
                                {book.title}
                            </Typography>
                            <Box sx={{mb:2 }}>
                                読んだ日: 
                                <LocalizationProvider dateAdapter={AdapterDateFns}
                                adapterLocale={ja} 
                                dateFormats={{ monthAndYear: "yyyy年 MM月" }}
                                >
                                <DatePicker
                                    label="日付"
                                    maxDate={new Date()} 
                                    value={value}
                                    onChange={(newValue) => {
                                    setNewValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                </LocalizationProvider>
                            </Box>
                            <Box>
                                感想: <br/>
                                <TextField
                                multiline
                                fullWidth
                                rows={8}
                                value={memo}
                                onChange={e => setMemo(e.target.value)} />
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Grid container>
                                <Grid item sm={6}>
                                    <Button component={Link} to='/'
                                    color="secondary" variant="contained">一覧に戻る</Button>
                                </Grid>
                                <Grid item sm={6}>
                                    <Button color="info" variant="contained"
                                    onClick={()=> updateBookInfo(book.id)}>保存する</Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    </>
    )
}
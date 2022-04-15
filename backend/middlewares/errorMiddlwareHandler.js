const errorMiddlewareHandler = (err, req, res, next) =>{

const errorStatuscode = res.errorstatusCode === 200 ? 500 : res.statusCode;
res.status(errorStatuscode);
res.json({
message:err.message,
});

};

module.exports = {errorMiddlewareHandler};
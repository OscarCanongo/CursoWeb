/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async({ actions,graphql, reporter }) => {
    
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacion{
                nodes{
                    slug
                }
            }
        }
    `);

    if(resultado.errors){
        reporter.paninc('No hubo resultados ', resultado.errors)
    }

    //Si hay paginas, crear los archivos
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(habitacion => {
        actions.createPage({
            
        })
    })

}
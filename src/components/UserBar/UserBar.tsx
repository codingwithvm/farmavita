export function UserBar() {
  return (
    <div className="d-flex align-items-center h-100 gap-4">
      <div className="d-flex align-items-center gap-2">
        <img width={20} height={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVR4nO3WrwrCQBzA8W+waFVQo/gIJpPB4hCsgqBPYDHrA4gvIZh8g3UNaza7OLOCYeDfiXBBLN7N305Bv3Dtx3243WCDX20OhGqtgOYn4BA4AUUsN1H4wDbcULBnG04BAXABsrZxV526YxvuPr1sUmv2Ci7EBG90Tr2MAR7rwKMY4JYOXBFGr0BOB04AO0F4gUFTQXhoArcF4aoJnAHOAmgAJDHME4BdItQXgHtR4DywfwPdAmkiVlaP/GgAHtQPRikq+rvV1dfFBxyBOe38h/tbC8x9P+yoTe+b1QTm/mGlGw7LH6npIjrWAAAAAElFTkSuQmCC" />
        Carrinho
      </div>
      <div className="d-flex align-items-center bg-primary text-white h-100 p-2 gap-2" style={{ width: '170px' }}>
        <img width={20} height={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7klEQVR4nO3UPUoDURDA8ZDClLFUrPUKehLxEMZjaCOKB9LSjyqLB9BG1EqRiJY/GVwhjfo2TD4I+4eBZXeW/5s3816n07KIoIcDXOO9jngexLdpSTdQ+Z1h5Eyj0uoP6bg8r3Lf21vKfqb4poH4KlM8aiAeZYobMa+K35aix4N5TXWvPqP/ETkraeKxm2s405vrh6gmtjL6WA9cxGX9LrfSlpmCLnZwhAs84bOOR5zjENuRmyFcxwmeG5zjWNQx1iYRruIMHyYn/j1Fv1S6hXt53GGzRHwrn6pEHMOSzUOJeA+vidIX7Bb1uWWp+AK3aDl9rK/F7wAAAABJRU5ErkJggg==" />
        Acessar Conta
      </div>
    </div>
  )
}
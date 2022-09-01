import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { Nodes } from 'src/app/models/nodes.model';
import { BookService } from 'src/app/services/book.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'type', 'self', 'urn', 'created_at', 'updated_at', 'content', 'properties', 'displaytype', 'image', 'autherlinkself', 'autherlinkrelated', 'publisherslinkself', 'publisherslinkrelated'];

  public nodeData: Nodes[] = [];
  dataSource!: MatTableDataSource<Nodes>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  private subject = new Subject<string>();

  constructor(private readonly bookService: BookService) { }

  ngOnInit(): void {
    this.nodeData = this.bookService.getNodes();
    this.dataSource = new MatTableDataSource<Nodes>(this.nodeData);;
    this.subscribeFilter();
    this.subscribeDataSouceCustomFilterPreicate();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.empTbSort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.subject.next(filterValue.trim().toLowerCase())
  }

  private subscribeDataSouceCustomFilterPreicate() {
    this.dataSource.filterPredicate = (data: Nodes, filter: string) => {
      return data.id.toLowerCase().includes(filter) || data.type.toLowerCase().includes(filter) || data.attributes.content.toLowerCase().includes(filter) || data.attributes.display_properties.type.toLowerCase().includes(filter)
    };

  }
  private subscribeFilter() {
    this.subject.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        console.log(value)
        this.dataSource.filter = value
      });
  }
}

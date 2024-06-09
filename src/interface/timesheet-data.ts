export interface TimeSheetType {
  id: number;
  judul_kegiatan: string;
  nama_proyek: string;
  tanggal_mulai: Date;
  tanggal_berakhir: Date;
  waktu_mulai: Date;
  waktu_berakhir: Date;
  durasi: Date;
}
export interface TimeSheetTypeRequest {
  id: number;
  judul_kegiatan: string;
  nama_proyek: string;
  tanggal_mulai: Date;
  tanggal_berakhir: Date;
  waktu_mulai: Date;
  waktu_berakhir: Date;
  durasi: Date;
}
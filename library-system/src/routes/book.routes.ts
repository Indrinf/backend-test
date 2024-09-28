import { Router } from 'express';
import { Book } from '../domain/Book';
import { Member } from '../domain/Member';
import { Borrow } from '../domain/Borrow';

const router = Router();

router.post('/:memberCode/borrow/:bookCode', async (req, res) => {
    const { memberCode, bookCode } = req.params;
    // Logika peminjaman
});

router.post('/:memberCode/return/:bookCode', async (req, res) => {
    const { memberCode, bookCode } = req.params;
    // Logika pengembalian
});

export default router;
